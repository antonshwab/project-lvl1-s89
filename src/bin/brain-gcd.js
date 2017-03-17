#!/usr/bin/env node

import playGame from '..';
import makeBrainGcdGame from '../games/brain-gcd-game';

const game = makeBrainGcdGame();

playGame(game);
