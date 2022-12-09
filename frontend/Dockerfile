FROM node:alpine

RUN npm install -g npm@latest
WORKDIR /app

COPY . ./
RUN npm install

ENTRYPOINT [ "npm" ]
CMD [ "start" ]
