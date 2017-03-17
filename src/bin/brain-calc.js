#!/usr/bin/env node

import playGame from '..';
import makeBrainCalcGame from '../games/brain-calc-game';

const game = makeBrainCalcGame();

playGame(game);
