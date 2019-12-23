FROM mhart/alpine-node:12
COPY . /omdb-bot/
COPY package*.json /omdb-bot/
WORKDIR /omdb-bot
RUN npm i --production
ENTRYPOINT [ "npm", "run", "start" ]
