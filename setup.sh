mkdir secrets
python3 -c 'import uuid; print(uuid.uuid4());' > secrets/secret_key
python3 -c 'import uuid; print(uuid.uuid4());' > secrets/mongodb_password
echo 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 > secrets/google_oauth_client_secret
echo 196290854318-jgukejpvhiagci7j2obkfipsmfd1gtda.apps.googleusercontent.com > secrets/google_oauth_client_id
