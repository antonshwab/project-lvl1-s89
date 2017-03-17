import { generateRandomIntegers, gcd } from '../libs/math';

const prepareGameData = (riddlesCount, minNum, maxNum) => {
  const alphaIntegers = generateRandomIntegers(riddlesCount, minNum, maxNum);
  const betaIntegers = generateRandomIntegers(riddlesCount, minNum, maxNum);
  const intPairs = alphaIntegers.reduce((acc, int, i) => [...acc, [int, betaIntegers[i]]], []);
  const data = intPairs.reduce((acc, [numA, numB]) => [...acc, [`${numA} ${numB}`, `${gcd(numA, numB)}`]], []);
  return data;
};


const makeBrainGcdGame = () => {
  const rules = 'Find the greatest common divisor of given numbers.';
  const data = prepareGameData(3, 0, 100);
  const game = {
    rules,
    data,
  };
  return game;
};

export default makeBrainGcdGame;
