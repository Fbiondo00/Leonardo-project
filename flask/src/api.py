import os
import http.client
import json
from bson import ObjectId
from decouple import config
from markupsafe import escape
from flask import Flask, session, request, redirect, url_for, Response
from flask_login import LoginManager, login_required, logout_user, UserMixin, current_user, login_user
from flask_bcrypt import Bcrypt
from pymongo import MongoClient
from http import HTTPStatus
from functools import wraps

class User(UserMixin):
    def __init__(self, user_id=None):
        self.id = user_id
        self.data = None

def manage_sensitive(name: str):
    v1 = config(name.upper())
    secret_fpath = f'/run/secrets/{name}'
    existence = os.path.exists(secret_fpath)
    if v1:
        return v1
    if existence:
        v2 = open(secret_fpath).read().rstrip('\n')
        return v2
    raise KeyError(f'{name}')

try:
    mongoClient = MongoClient(
        config("MONGO_HOST", default="localhost"),
        config("MONGO_PORT", cast=int, default=27017),
        username=manage_sensitive("mongo_user"),
        password=manage_sensitive("mongo_pass")
    )
    users = mongoClient.neurldb.users
except Exception as e:
    print(f"Error connecting to MongoDB: {e}")

app = Flask(__name__)
app.secret_key = config("SECRET_KEY")
login_manager = LoginManager()
login_manager.init_app(app)
bcrypt = Bcrypt(app)

@login_manager.user_loader
def load_user(user_id):
    try:
        user = User(user_id)
        user.data = users.find_one({"_id": ObjectId(user_id)}, {"_id": 0, "password": 0})
        if user.data:
            return user
    except Exception as e:
        print(f"Error loading user: {e}")
    return None

@login_manager.unauthorized_handler
def unauthorized():
    return redirect(url_for('login'))


@app.route('/')
@login_required
def index():
    return 'Welcome to the home page!'

@app.route('/profile')
@login_required
def profile():
    return json.dumps(current_user.data)

@app.route('/search')
@login_required
def search():
    return 'Welcome to the search page!'

@app.route("/get_user", methods=['GET'])
@login_required
def get_user():
    try:
        return json.dumps(current_user.data)
    except Exception as e:
        print(f"Error getting user: {e}")
        return '{"error":"internal server error"}', HTTPStatus.INTERNAL_SERVER_ERROR, {'Content-Type': 'application/json'}

@app.route("/login", methods=['GET', 'POST'])
def login():
    try:
        data = json.loads(request.data.decode("utf-8"))
        if "password" not in data or "email" not in data:
            return '{"error":"invalid data"}', HTTPStatus.BAD_REQUEST, {'Content-Type': 'application/json'}
        user_data = users.find_one({"email": escape(data["email"])})
        if not user_data or not bcrypt.check_password_hash(user_data.pop("password"), data["password"]):
            return '{"error":"invalid user"}', HTTPStatus.UNAUTHORIZED, {'Content-Type': 'application/json'}
        user = User(user_data["_id"])
        user.data = user_data
        login_user(user, True)
        return '{"success":"true"}'
    except Exception as e:
        print(f"Error during login: {e}")
        return '{"error":"internal server error"}', HTTPStatus.INTERNAL_SERVER_ERROR, {'Content-Type': 'application/json'}

@app.route("/logout")
@login_required
def logout():
    logout_user()
    return '{"success":"true"}'

@app.route("/signup", methods=['POST'])
def create_user():
    try:
        data = json.loads(request.data.decode("utf-8"))
        user = users.find_one({"email": data["email"]})
        if user is not None:
            return '{"error": "User already exists"}', HTTPStatus.CONFLICT, {'Content-Type': 'application/json'}
        user_data = {
            "email": escape(data["email"]),
            "password": bcrypt.generate_password_hash(data["password"]).decode('utf-8')
        }
        user_id = users.insert_one(user_data).inserted_id
        user = User(user_id)
        user.data = user_data
        login_user(user, True)
        return '{"success": "true"}', HTTPStatus.OK, {'Content-Type': 'application/json'}
    except Exception as e:
        print(f"Error creating user: {e}")
        return '{"error":"internal server error"}', HTTPStatus.INTERNAL_SERVER_ERROR, {'Content-Type': 'application/json'}

if __name__ == '__main__':
    app.run(port=1337, debug=config("DEBUG", cast=bool), threaded=True)
