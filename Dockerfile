FROM mhart/alpine-node:10
COPY src /omdb-bot/src
COPY package.json /omdb-bot/package.json
WORKDIR /omdb-bot/
RUN npm i --production
ENTRYPOINT [ "/omdb-bot/bin/omdb-bot" ]
