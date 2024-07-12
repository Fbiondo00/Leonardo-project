import http.client
import json
import os
from bson import ObjectId
from markupsafe import escape
from decouple import config
from flask import Flask, session, request, redirect, url_for, render_template
from flask_login import LoginManager, login_required, logout_user, UserMixin, current_user, login_user
from flask_bcrypt import Bcrypt
from pymongo import MongoClient
from http import HTTPStatus
from authlib.integrations.flask_client import OAuth

def manage_sensitive(name: str):
    file_name = None
    if name.upper()+'_FILE' in os.environ:
        file_name = os.environ[name.upper()+'_FILE']
    if file_name is not None and os.path.exists(file_name):
        return open(file_name).read().rstrip('\n')
    return config(name.upper())

try:
    mongoClient = MongoClient(
        config("MONGO_HOST", default="localhost"),
        config("MONGO_PORT", cast=int, default=27017),
        username=manage_sensitive("MONGO_USER"),
        password=manage_sensitive("MONGO_PASSWORD")
    )
    users = mongoClient.neurldb.users
    welfares = mongoClient.neurldb.welfares
except Exception as e:
    print(f"Error connecting to MongoDB: {e}")

app = Flask(__name__)
app.secret_key = manage_sensitive("SECRET_KEY")
login_manager = LoginManager()
login_manager.init_app(app)
bcrypt = Bcrypt(app)

# Configure OAuth
oauth = OAuth(app)
google = oauth.register(
    name='google',
    client_id=os.getenv("GOOGLE_CLIENT_ID"),
    client_secret=os.getenv("GOOGLE_CLIENT_SECRET"),
    authorize_url='https://accounts.google.com/o/oauth2/auth',
    access_token_url='https://accounts.google.com/o/oauth2/token',
    redirect_uri="http://localhost:1337/authorize",
    client_kwargs={'scope': 'openid profile email'}
)

# Utility functions
def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

class User(UserMixin):
    def __init__(self, user_id, data):
        self.id = user_id
        self.data = data

def admin_required(fn):
    def wrapper(*args, **kwargs):
        if current_user.data["email"] == config("admin_email"):
            return fn(*args, **kwargs)
        return '{"error": "Unauthorized"}', HTTPStatus.UNAUTHORIZED, {'Content-Type': 'application/json'}
    wrapper.__name__ = fn.__name__
    return wrapper

@login_manager.user_loader
def load_user(user_id):
    user_data = users.find_one({"_id": ObjectId(user_id)})
    if user_data:
        return User(str(user_data["_id"]), user_data)
    return None

@app.route('/')
def index():
    if current_user.is_authenticated:
        return f'Welcome {current_user.data["full_name"]}!'
    else:
        return redirect("http://localhost:1337/login") # then change with url_for(...)
    return 'Welcome!'

@login_manager.unauthorized_handler
def unauthorized():
    return redirect("http://localhost:1337/login") # then change with url_for(...)

@app.route('/login', methods=['POST'])
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

@app.route('/login_google')
def login_google():
    redirect_uri = "http://localhost:1337/authorize"
    return google.authorize_redirect(redirect_uri)

@app.route('/authorize')
def authorize():
    token = google.authorize_access_token()
    user_info = google.parse_id_token(token)
    user_email = user_info['email']

    user_data = users.find_one({"email": user_email})
    if user_data:
        user = User(str(user_data["_id"]), user_data)
        login_user(user)
        return redirect("http://localhost:1337/")
    else:
        session['google_user'] = user_info
        return redirect("http://localhost:1337/signup2")

@app.route('/signup', methods=['POST'])
def signup():
    data = json.loads(request.data.decode("utf-8"))

    required_fields = ["email", "password"]
    for field in required_fields:
        if field not in data:
            return f'{{"error": "Missing {field}"}}', HTTPStatus.BAD_REQUEST, {'Content-Type': 'application/json'}

    user = users.find_one({"email": data["email"]})
    if user is not None:
        return '{"error": "User already exists"}', HTTPStatus.CONFLICT, {'Content-Type': 'application/json'}

    user_data = {
        "email": escape(data["email"]),
        "password": bcrypt.generate_password_hash(data["password"])
    }

    user = UserMixin()
    user.id = users.insert_one(user_data).inserted_id
    user.data = user_data
    login_user(user, True)

    return redirect("http://localhost:1337/signup2") # then change with url_for(...)

@app.route('/signup2', methods=['GET', 'POST'])
def signup2():
    if request.method == 'POST':
        data = json.loads(request.data.decode("utf-8"))

        required_fields = ["full_name", "username", "date_of_birth", "marital_status"]
        for field in required_fields:
            if field not in data:
                return f'{{"error": "Missing {field}"}}', HTTPStatus.BAD_REQUEST, {'Content-Type': 'application/json'}

        google_user = session.get('google_user')
        if google_user:
            user_data = {
                "full_name": escape(data["full_name"]),
                "username": escape(data["username"]),
                "date_of_birth": escape(data["date_of_birth"]),
                "marital_status": escape(data["marital_status"]),
                "has_children": data.get("has_children", False),
                "has_elderly_parents": data.get("has_elderly_parents", False),
                "interests": data.get("interests", [])
            }
            user_email = google_user['email']
            user = users.find_one({"email": user_email})
            users.update_one({"_id": user["_id"]}, {"$set": user_data})
            user_data.update(google_user)
            user = User(str(user["_id"]), user_data)
            login_user(user)
            session.pop('google_user', None)
        else:
            current_user.data.update({
                "full_name": escape(data["full_name"]),
                "username": escape(data["username"]),
                "date_of_birth": escape(data["date_of_birth"]),
                "marital_status": escape(data["marital_status"]),
                "has_children": data.get("has_children", False),
                "has_elderly_parents": data.get("has_elderly_parents", False),
                "interests": data.get("interests", [])
            })
            users.update_one({"_id": ObjectId(current_user.id)}, {"$set": current_user.data})

        return redirect("http://localhost:1337/") # then change with url_for(...)

    return render_template('/signup2.html')


#to fix admin and search
@app.route('/admin', methods=['GET'])
@admin_required
def admin():
    welfares_list = list(welfares.find())
    return json.dumps(welfares_list)


@app.route('/add_welfare', methods=['POST'])
@admin_required
def add_welfares():
    title = request.form['title']
    welf_title = welfares.find_one({"title": title})
    if welf_title:
        return '{"error": "Welfare already exists"}', HTTPStatus.CONFLICT, {'Content-Type': 'application/json'}
    description = request.form['description']
    if 'image' not in request.files:
        flash('No file part')
        return redirect(request.url)
    file = request.files['image']
    if file.filename == '':
        flash('No selected file')
        return redirect(request.url)
    if file and allowed_file(file.filename):
        filename = secure_filename(file.filename)
        file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
        image_path = os.path.join(app.config['UPLOAD_FOLDER'], filename)

        # Save to MongoDB
        welfares.insert_one({
            'title': title,
            'description': description,
            'image_path': image_path
        })
        flash('Welfare added successfully!')
        return redirect(url_for('admin'))

@app.route('/delete_welfare/<welfare_id>', methods=['POST'])
@admin_required
def delete_welfare(welfare_id):
    result = welfares.delete_one({"_id": ObjectId(welfare_id)})
    if result.deleted_count == 1:
        flash('Welfare deleted successfully!')
    else:
        flash('Error deleting welfare!')
    return redirect(url_for('admin'))

@app.route('/search', methods=['GET'])
@login_required
def search():
    query = request.args.get('query')
    if not query:
        return '{"error": "Missing query"}', HTTPStatus.BAD_REQUEST, {'Content-Type': 'application/json'}

    results = welfares.find({"$text": {"$search": query}})
    return json.dumps(list(results))


@app.route('/logout')
@login_required
def logout():
    google_user = session.get('google_user')
    if google_user:
        session.clear()
    else:
        logout_user()
    return redirect("http://localhost:1337/login") # then change with url_for(...)

@app.route('/get_user', methods=['GET'])
@login_required
def get_user():
    return json.dumps(current_user.data)

if __name__ == '__main__':
    users.find_one({"email": config("admin_email")})
    app.run(port=1337, debug=config("DEBUG", cast=bool), threaded=True)
