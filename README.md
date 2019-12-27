<!-- TITLE/ -->

<h1>omdb-bot</h1>

<!-- /TITLE -->


<!-- BADGES/ -->

<span class="badge-travisci"><a href="http://travis-ci.org/kreig303/omdb-bot" title="Check this project's build status on TravisCI"><img src="https://img.shields.io/travis/kreig303/omdb-bot/master.svg" alt="Travis CI Build Status" /></a></span>
&nbsp;[![Greenkeeper badge](https://badges.greenkeeper.io/kreig303/omdb-bot.svg)](https://greenkeeper.io/)

<!-- /BADGES -->


<!-- DESCRIPTION/ -->

Finds film details on IMDB via the OMDB API.

<!-- /DESCRIPTION -->


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
```
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

<!-- HISTORY/ -->

<h2>History</h2>

<a href="https://github.com/kreig303/omdb-bot/releases">Discover the release history by heading on over to the releases page.</a>

<!-- /HISTORY -->


<!-- CONTRIBUTE/ -->

<h2>Contribute</h2>

<a href="https://github.com/kreig303/omdb-bot/blob/master/CONTRIBUTING.md#files">Discover how you can contribute by heading on over to the <code>CONTRIBUTING.md</code> file.</a>

<!-- /CONTRIBUTE -->


<!-- BACKERS/ -->

<h2>Backers</h2>

<h3>Maintainers</h3>

These amazing people are maintaining this project:

<ul><li><a href="https://github.com/kreig303">Kreig Zimmerman</a> — <a href="https://github.com/kreig303/omdb-bot/commits?author=kreig303" title="View the GitHub contributions of Kreig Zimmerman on repository kreig303/omdb-bot">view contributions</a></li></ul>

<h3>Sponsors</h3>

No sponsors yet! Will you be the first?



<h3>Contributors</h3>

These amazing people have contributed code to this project:

<ul><li><a href="https://github.com/kreig303">Kreig Zimmerman</a> — <a href="https://github.com/kreig303/omdb-bot/commits?author=kreig303" title="View the GitHub contributions of Kreig Zimmerman on repository kreig303/omdb-bot">view contributions</a></li>
<li><a href="http://github.com/apps/dependabot">dependabot[bot]</a> — <a href="https://github.com/kreig303/omdb-bot/commits?author=dependabot[bot]" title="View the GitHub contributions of dependabot[bot] on repository kreig303/omdb-bot">view contributions</a></li></ul>

<a href="https://github.com/kreig303/omdb-bot/blob/master/CONTRIBUTING.md#files">Discover how you can contribute by heading on over to the <code>CONTRIBUTING.md</code> file.</a>

<!-- /BACKERS -->


<!-- LICENSE/ -->

<h2>License</h2>

Unless stated otherwise all works are:

<ul><li>Copyright &copy; 2019 <a href="https://github.com/kreig303">Kreig Zimmerman</a></li></ul>

and licensed under:

<ul><li><a href="http://spdx.org/licenses/MIT.html">MIT License</a></li></ul>

<!-- /LICENSE -->
