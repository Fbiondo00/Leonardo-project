import json
import os
import logging
from bson import ObjectId
from decouple import config
from markupsafe import escape
from flask import Flask, request
from flask_login import LoginManager, login_required, logout_user, UserMixin, login_user
from flask_bcrypt import Bcrypt
from pymongo import MongoClient
from http import HTTPStatus

# Configurazione del logging
logging.basicConfig(level=logging.DEBUG)

# Funzione per gestire le variabili sensibili
def manage_sensitive(name: str):
    file_name = os.environ.get(name.upper() + '_FILE')
    if file_name and os.path.exists(file_name):
        return open(file_name).read().rstrip('\n')
    return config(name.upper())

# Recupero delle credenziali MongoDB
mongo_user = manage_sensitive("MONGO_USER")
mongo_password = manage_sensitive("MONGO_PASSWORD")
mongo_host = config("MONGO_HOST", default="localhost")
mongo_port = config("MONGO_PORT", cast=int, default=27017)

# Logging delle credenziali MongoDB
logging.debug(f"MONGO_USER: {mongo_user}")
logging.debug(f"MONGO_HOST: {mongo_host}")
logging.debug(f"MONGO_PORT: {mongo_port}")

# Connessione a MongoDB
try:
    mongoClient = MongoClient(
        host=mongo_host,
        port=mongo_port,
        username=mongo_user,
        password=mongo_password,
        authSource='admin'  # Specifica il database di autenticazione, se necessario
    )
    db = mongoClient.neurldb  # Sostituisci con il nome del tuo database
    users_collection = db.users
    logging.debug("Connected to MongoDB successfully.")
except Exception as e:
    logging.error(f"Error connecting to MongoDB: {e}")
    raise

# Configurazione dell'app Flask
app = Flask(__name__)
app.secret_key = manage_sensitive("SECRET_KEY")
login_manager = LoginManager()
login_manager.init_app(app)
bcrypt = Bcrypt(app)

# Modello dell'utente per Flask-Login
class User(UserMixin):
    pass

# Caricamento dell'utente dal login manager
@login_manager.user_loader
def load_user(user_id):
    try:
        user_data = users_collection.find_one({"_id": ObjectId(user_id)})
        if user_data:
            user = User()
            user.id = str(user_data["_id"])
            user.email = user_data["email"]
            return user
    except Exception as e:
        logging.error(f"Error loading user: {e}")
    return None

# Gestione dell'autorizzazione non riuscita
@login_manager.unauthorized_handler
def unauthorized():
    return '{"error": "Unauthorized"}', HTTPStatus.UNAUTHORIZED, {'Content-Type': 'application/json'}

# Rotte dell'applicazione

@app.route('/')
def hello_world():
    return "Hello World"

@app.route("/login", methods=['POST'])
def login():
    try:
        data = json.loads(request.data.decode("utf-8"))
        email = escape(data.get("email"))
        password = data.get("password")
        if not email or not password:
            return '{"error":"invalid data"}', HTTPStatus.BAD_REQUEST, {'Content-Type': 'application/json'}

        user_data = users_collection.find_one({"email": email})
        if not user_data or not bcrypt.check_password_hash(user_data["password"], password):
            return '{"error":"invalid credentials"}', HTTPStatus.UNAUTHORIZED, {'Content-Type': 'application/json'}

        user = User()
        user.id = str(user_data["_id"])
        login_user(user, remember=True)
        return '{"success":"true"}'

    except Exception as e:
        logging.error(f"Error during login: {e}")
        return '{"error":"internal server error"}', HTTPStatus.INTERNAL_SERVER_ERROR, {'Content-Type': 'application/json'}

@app.route("/logout")
@login_required
def logout():
    try:
        logout_user()
        return '{"success":"true"}'
    except Exception as e:
        logging.error(f"Error during logout: {e}")
        return '{"error":"internal server error"}', HTTPStatus.INTERNAL_SERVER_ERROR, {'Content-Type': 'application/json'}

@app.route("/create_user", methods=['POST'])
def create_user():
    try:
        data = json.loads(request.data.decode("utf-8"))
        email = escape(data.get("email"))
        password = data.get("password")
        if not email or not password:
            return '{"error":"invalid data"}', HTTPStatus.BAD_REQUEST, {'Content-Type': 'application/json'}

        existing_user = users_collection.find_one({"email": email})
        if existing_user:
            return '{"error": "User already exists"}', HTTPStatus.CONFLICT, {'Content-Type': 'application/json'}

        hashed_password = bcrypt.generate_password_hash(password).decode('utf-8')
        user_data = {
            "email": email,
            "password": hashed_password
        }

        if "children" in data:
            user_data["children"] = []
            for child_data in data["children"]:
                child = {}
                for key, value in child_data.items():
                    if isinstance(value, str):
                        child[key] = escape(value)
                user_data["children"].append(child)

        result = users_collection.insert_one(user_data)
        user_id = str(result.inserted_id)

        user = User()
        user.id = user_id
        login_user(user, remember=True)

        return '{"success": "true"}', HTTPStatus.OK, {'Content-Type': 'application/json'}

    except Exception as e:
        logging.error(f"Error creating user: {e}")
        return '{"error":"internal server error"}', HTTPStatus.INTERNAL_SERVER_ERROR, {'Content-Type': 'application/json'}

if __name__ == '__main__':
    debug_mode = config("DEBUG", cast=bool, default=False)
    logging.debug(f"Running in debug mode: {debug_mode}")

    # Creazione dell'utente predefinito
    default_email = "ciao@gmail.com"
    default_password = "ciao123"
    if not users_collection.find_one({"email": default_email}):
        hashed_password = bcrypt.generate_password_hash(default_password).decode('utf-8')
        default_user = {
            "email": default_email,
            "password": hashed_password
        }
        users_collection.insert_one(default_user)
        logging.debug(f"Default user created: {default_email}")
    else:
        logging.debug(f"Default user '{default_email}' already exists.")

    app.run(host='0.0.0.0', port=1337, debug=debug_mode, threaded=True)
