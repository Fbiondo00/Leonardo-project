import http.client
import json
import os

from bson import ObjectId
from decouple import config
from markupsafe import escape
from flask import Flask, session, request, redirect, url_for, Response
from flask_login import LoginManager, login_required, logout_user, UserMixin, current_user, login_user
from flask_bcrypt import Bcrypt
from pymongo import MongoClient
from http import HTTPStatus

def manage_sensitive(name: str):
    file_name = None
    if name.upper()+'_FILE' in os.environ:
        file_name = os.environ[name.upper()+'_FILE']
    if file_name is not None and os.path.exists(file_name):
        return open(file_name).read().rstrip('\n')
    return config(name.upper())

mongoClient = MongoClient(config("MONGO_HOST", default="localhost"), config("MONGO_PORT", cast=int, default=27017), username=manage_sensitive("MONGO_USER"), password=manage_sensitive("MONGO_PASSWORD"))
users = mongoClient.neurldb.users

app = Flask(__name__)
app.secret_key = manage_sensitive("SECRET_KEY")
login_manager = LoginManager()
login_manager.init_app(app)
bcrypt = Bcrypt(app)


@app.route('/')
def hello_world():
    return "Hello World"


@login_manager.user_loader
def load_user(user_id):
    user = UserMixin()
    user.id = user_id
    user.data = users.find_one({"_id": ObjectId(user_id)}, {"_id": 0, "password": 0})
    print(user.data, type(user.data))
    if user.data:
        return user
    return


@login_manager.unauthorized_handler
def unauthorized():
    return '{"error": "Unauthorized"}', HTTPStatus.UNAUTHORIZED, {'Content-Type': 'application/json'}


@app.route("/login", methods=['POST'])
def login():
    data = json.loads(request.data.decode("utf-8"))
    if "password" not in data or "email" not in data:
        return '{"error":"invalid data"}', HTTPStatus.BAD_REQUEST, {'Content-Type': 'application/json'}
    user = UserMixin()
    user.data = users.find_one({"email": escape(data["email"])})
    if not user.data or not bcrypt.check_password_hash(user.data.pop("password"), data["password"]):
        return '{"error":"invalid user"}', HTTPStatus.UNAUTHORIZED, {'Content-Type': 'application/json'}
    user.id = str(user.data.pop("_id"))
    login_user(user, True)
    return '{"success":"true"}'


@app.route("/logout")
@login_required
def logout():
    logout_user()
    return '{"success":"true"}'


@app.route("/create_user", methods=['POST'])
def create_user():
    data = json.loads(request.data.decode("utf-8"))
    print("JSON Data", type(data), data)
    user = users.find_one({"email": data["email"]})
    if user is not None:
        return '{"error": "User already exists"}', HTTPStatus.CONFLICT, {'Content-Type': 'application/json'}
    user = UserMixin()
    user.data = {
        "password": bcrypt.generate_password_hash(data["password"])
    }
    for key in data:
        if isinstance(data[key], str) and key != "password":
            user.data[key] = escape(data[key])
        print(key, type(data[key]))
    if "children" in data:
        user.data["children"] = []
        for child_data in data["children"]:
            child = {}
            for key in child_data:
                if isinstance(child_data[key], str):
                    child[key] = escape(child_data[key])
            user.data["children"].append(child)
    user.id = users.insert_one(user.data).inserted_id
    login_user(user, True)
    return '{"success": "true"}', HTTPStatus.OK, {'Content-Type': 'application/json'}


@app.route("/get_user", methods=['GET'])
@login_required
def get_user():
    return json.dumps(current_user.data)


if __name__ == '__main__':
    app.run(port=1337, debug=config("DEBUG", cast=bool), threaded=True)
