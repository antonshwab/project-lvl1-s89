import { generateRandomIntegers, isEven } from '../libs/math';

const makeIntegerRiddles = (riddlesCount) => {
  const integersCount = riddlesCount;
  const minInt = 0;
  const maxInt = 100;
  return generateRandomIntegers(integersCount, minInt, maxInt);
};

const prepareRiddlesWithAnswers = (riddlesCount) => {
  const riddles = makeIntegerRiddles(riddlesCount);
  const riddlesWithAnswers = riddles.map((int) => {
    if (isEven(int)) {
      return [int, 'yes'];
    }
    return [int, 'no'];
  });
  return riddlesWithAnswers;
};

const rules = 'Answer "yes" if number even otherwise answer "no".\n';

const riddlesCount = 3;
const riddlesWithAnswers = prepareRiddlesWithAnswers(riddlesCount);

const brainEvenGame = {
  rules,
  riddlesWithAnswers,
};

export default brainEvenGame;
