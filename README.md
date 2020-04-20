<!-- TITLE/ -->

<h1>omdb-bot</h1>

<!-- /TITLE -->


<!-- BADGES/ -->



<!-- /BADGES -->


<!-- DESCRIPTION/ -->

Finds infos from IMDB via OMDB API.

<!-- /DESCRIPTION -->


## Prerequisites

1. `git` and `node` must be installed.
2. Download a REST tool such as [Paw](https://paw.cloud) (Macintosh only) or [Postman](https://www.getpostman.com) (all major platforms).
3. Register for an API key at [OMDB API](https://www.omdbapi.com/apikey.aspx).

## Install

```sh
$ git clone https://github.com/kreig303/omdb-bot.git
$ cd omdb-bot
$ npm it
```

Then, create a `.env` file at the root of the app directory and include your api key in the following format:

```
API_KEY=your-api-key
```

## Usage

### Run

```sh
$ npm start
```

### Queries (for REST tool)

1. ```http://localhost:3030/api/movie/[title of film]``` (gets movie info)
2. ```http://localhost:3030/api/poster/[title of film]``` (gets movie poster)

#### Testing movie poster in CLI

No browser? no problems. Use cURL and img2text (available on npm):

`curl http://localhost:3030/api/poster/nemo --output - > file.png && img2txt file.png`

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

<ul><li><a href="https://github.com/kreig303">Kreig Zimmerman</a> — <a href="https://github.com/kreig303/omdb-bot/commits?author=kreig303" title="View the GitHub contributions of Kreig Zimmerman on repository kreig303/omdb-bot">view contributions</a></li></ul>

<a href="https://github.com/kreig303/omdb-bot/blob/master/CONTRIBUTING.md#files">Discover how you can contribute by heading on over to the <code>CONTRIBUTING.md</code> file.</a>

<!-- /BACKERS -->


<!-- LICENSE/ -->

<h2>License</h2>

Unless stated otherwise all works are:

<ul><li>Copyright &copy; 2019 <a href="https://github.com/kreig303">Kreig Zimmerman</a></li></ul>

and licensed under:

<ul><li><a href="http://spdx.org/licenses/MIT.html">MIT License</a></li></ul>

<!-- /LICENSE -->
