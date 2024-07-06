FROM node:10-alpine AS PROD
VOLUME [ "/app" ]
WORKDIR "/app"
VOLUME [ "/build" ]
ENV BUILD_PATH = "/build"
CMD npm run build

FROM node:10-alpine AS DEV
VOLUME [ "/app" ]
WORKDIR "/app"
ENV PORT = 8000
CMD npm run start
EXPOSE 8000
