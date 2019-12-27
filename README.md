# omdb-bot
[![Travis CI Build Status](https://img.shields.io/travis/kreig303/omdb-bot/master.svg)](http://travis-ci.com/kreig303/omdb-bot)
&nbsp;[![Greenkeeper badge](https://badges.greenkeeper.io/kreig303/omdb-bot.svg)](https://greenkeeper.io/)

Finds film details on IMDB via the OMDB API.

## Prerequisites
1. [git](https://git-scm.com/downloads).
2. [Node 12+](https://nodejs.org/en/download/).
3. [Docker Desktop](https://www.docker.com/products/developer-tools)

## Installation
```sh
% git clone https://github.com/kreig303/omdb-bot.git
% cd omdb-bot
% npm it
```

## Configuration
1. [Register for an OMDB API key](https://www.omdbapi.com/).
2. Create a `.env` file at the root of the app directory
3. Configure `.env` as follows. Port 8000 is my default. [YMMV](https://dictionary.cambridge.org/us/dictionary/english/ymmv).
```env
PORT=8000
BOT_KEY=abcdefg
```

## Usage

### Develop
```sh
% npm run start:dev
```
### Run

#### Docker
```sh
% docker-compose build
% docker-compose up
```

#### CLI
```sh
% npm start
```

### Endpoints
1. ```/api/movie/[title of film]``` (gets movie info)
2. ```/api/poster/[imdb id for film]``` (gets movie poster)

## History

[Discover the release history by heading on over to the releases page.](https://github.com/kreig303/omdb-bot/releases)

## Contribute

These amazing people have contributed code to this project:

- [Kreig Zimmerman](https://github.com/kreig303) — [view contributions](https://github.com/kreig303/omdb-bot/commits?author=kreig303)

[Discover how you can contribute by heading on over to the <code>CONTRIBUTING.md</code> file.](https://github.com/kreig303/omdb-bot/blob/master/CONTRIBUTING.md#files)

## License

Unless stated otherwise all works are:

- Copyright &copy; 2019-2020 [Kreig Zimmerman](https://github.com/kreig303)

and licensed under:

- [MIT License](http://spdx.org/licenses/MIT.html)
