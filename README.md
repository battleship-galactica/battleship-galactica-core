# battleship-galactica-core (WIP)
Build: [![CircleCI](https://circleci.com/gh/battleship-galactica/battleship-galactica-core/tree/integration.svg?style=svg)](https://circleci.com/gh/battleship-galactica/battleship-galactica-core/tree/integration)

A NodeJS module that provides the core Battleship-Galactica game, with observables for players.

# Usage

## Installation
```bash
$ npm install battleship-galactica-core
```

## Loading the module
```javascript
const BattleshipGalactica = require('battleship-galactica-core');
```

## Starting the game
First, create an observable for each player. Then, start the game by instantiating a new instance of the game.

```javascript
const game = new BattleshipGalactica(uuidv4(), p1Observable, p2Observable);
```