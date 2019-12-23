FROM mhart/alpine-node:12
COPY src /omdb-bot/src
COPY package*.json /omdb-bot/
COPY .env /omdb-bot/
WORKDIR /omdb-bot
RUN npm i --production
ENTRYPOINT [ "npm", "run", "start" ]
