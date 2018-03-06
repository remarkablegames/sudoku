# [sudoku](https://remarkablegames.org/sudoku/)

Sudoku is a logic-based, combinatorial number-placement puzzle. The objective is to fill a 9×9 grid with digits so that each column, each row, and each of the nine 3×3 subgrids that compose the grid contains all of the digits from 1 to 9. [[Source](https://wikipedia.org/wiki/Sudoku)]

[Play](https://remarkablegames.org/sudoku/)

## Prerequisites

* [Node.js](https://nodejs.org)

## Install

Clone repository:

```sh
$ git clone https://github.com/remarkablegames/sudoku.git
```

Install dependencies:

```sh
$ cd sudoku
$ npm install
```

## Run

Run development server:

```sh
$ npm start
```

You should be able to view the app at http://localhost:3000.

## Release

Release will bump package version, generate changelog, and create git tag:

```sh
$ npm run release
$ git push --follow-tags
```

## Deploy

Deploy to [GitHub Pages](https://pages.github.com):

```sh
$ npm run deploy
```

## License

[MIT](LICENSE)
