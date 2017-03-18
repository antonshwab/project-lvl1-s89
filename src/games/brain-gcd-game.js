import { gcd, getRandomInt } from '../libs/math';

const putRandomIntegerPair = () => {
  const min = 1;
  const max = 100;
  const intA = getRandomInt(min, max);
  const intB = getRandomInt(min, max);
  return [intA, intB];
};

const getAnswer = (integersPair) => {
  const [intA, intB] = integersPair;
  return `${gcd(intA, intB)}`;
};

const getRiddle = (integersPair) => {
  const [intA, intB] = integersPair;
  return `${intA} ${intB}`;
};

const prepareRiddlesWithAnswers = () => {
  const integerPairs = Array.from({ length: 3 }, putRandomIntegerPair);
  const riddlesWithAnswers = integerPairs
    .reduce((acc, intPair) => [...acc, [getRiddle(intPair), getAnswer(intPair)]], []);
  return riddlesWithAnswers;
};

const rules = 'Find the greatest common divisor of given numbers.';

const riddlesWithAnswers = prepareRiddlesWithAnswers();

const brainGcdGame = {
  rules,
  riddlesWithAnswers,
};

export default brainGcdGame;
