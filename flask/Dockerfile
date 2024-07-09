FROM python:3.8

WORKDIR /app

COPY requirements.txt ./

RUN pip install --upgrade pip
RUN pip install --no-cache-dir -r requirements.txt


COPY src/api.py /app/app.py

# Add /usr/local/lib/python3.8/site-packages and /usr/local/bin to PATH
ENV PATH="/usr/local/lib/python3.8/site-packages:/usr/local/bin:${PATH}"

ENV FLASK_APP=app.py
ENV FLASK_RUN_HOST=0.0.0.0
ENV FLASK_RUN_PORT=1337
ENV MONGO_USER=admin
ENV MONGO_PASS=admin

EXPOSE 1337

CMD [ "python3", "-m" , "flask", "run", "--host=0.0.0.0"]
