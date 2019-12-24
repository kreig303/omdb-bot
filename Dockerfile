FROM mhart/alpine-node:12
COPY . /omdb-bot/
WORKDIR /omdb-bot
RUN npm ci --production
ENTRYPOINT [ "npm", "run", "start" ]
