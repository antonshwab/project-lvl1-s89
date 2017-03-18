import { gcd, getRandomInt } from '../libs/math';

const putRandomIntegerPair = () => {
  const min = 1;
  const max = 100;
  const intA = getRandomInt(min, max);
  const intB = getRandomInt(min, max);
  return [intA, intB];
};

const makeIntegerPairs = pairsCount =>
  Array.from({ length: pairsCount }, putRandomIntegerPair);

const getAnswer = (integersPair) => {
  const [intA, intB] = integersPair;
  return `${gcd(intA, intB)}`;
};

const getRiddle = (integersPair) => {
  const [intA, intB] = integersPair;
  return `${intA} ${intB}`;
};

const prepareRiddlesWithAnswers = (riddlesCount) => {
  const pairsCount = riddlesCount;
  const integerPairs = makeIntegerPairs(pairsCount);
  const riddlesWithAnswers = integerPairs
    .reduce((acc, intPair) => [...acc, [getRiddle(intPair), getAnswer(intPair)]], []);
  return riddlesWithAnswers;
};

const rules = 'Find the greatest common divisor of given numbers.';

const riddlesCount = 3;
const riddlesWithAnswers = prepareRiddlesWithAnswers(riddlesCount);

const brainGcdGame = {
  rules,
  riddlesWithAnswers,
};

export default brainGcdGame;
