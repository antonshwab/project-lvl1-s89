#!/usr/bin/env node

import playGame from '..';
import makeBrainEvenGame from '../games/brain-even-game';

const game = makeBrainEvenGame();

playGame(game);
