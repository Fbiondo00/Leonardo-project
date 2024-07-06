FROM python:3.11-slim AS BUILD

WORKDIR /app

COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

COPY src/api.py /app/

FROM python:3.8-slim AS PROD

WORKDIR /app

COPY --from=BUILD /usr/local/lib/python3.8/site-packages /usr/local/lib/python3.8/site-packages
COPY --from=BUILD /app /app

ENV FLASK_APP=app.py
ENV FLASK_RUN_HOST=0.0.0.0
ENV FLASK_RUN_PORT=$FLASK_PORT

EXPOSE $FLASK_PORT

CMD ["flask", "run"]
