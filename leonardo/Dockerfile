FROM node:22 AS PROD
VOLUME [ "/app" ]
WORKDIR "/app"
COPY package.json .
RUN npm install
COPY . .
CMD npm run build

FROM node:22 AS DEV
VOLUME [ "/app" ]
WORKDIR "/app"
ENV PORT = 8000
CMD npm run start
EXPOSE 8000
