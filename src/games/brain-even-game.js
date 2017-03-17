import { generateRandomIntegers } from '../libs/math';

const prepareGameData = (riddlesCount, minNum, maxNum) => {
  const integers = generateRandomIntegers(riddlesCount, minNum, maxNum);

  const integersWithAnswers = integers.map((int) => {
    const isEven = i => i % 2 === 0;
    if (isEven(int)) {
      return [int, 'yes'];
    }
    return [int, 'no'];
  });

  return integersWithAnswers;
};

const makeBrainEvenGame = () => {
  const rules = 'Answer "yes" if number even otherwise answer "no".\n';
  const data = prepareGameData(3, 1, 100);
  const game = {
    rules,
    data,
  };
  return game;
};

export default makeBrainEvenGame;
