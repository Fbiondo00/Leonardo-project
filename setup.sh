mkdir secrets
python3 -c 'import uuid; print(uuid.uuid4());' > secrets/secret_key
python3 -c 'import uuid; print(uuid.uuid4());' > secrets/mongodb_password