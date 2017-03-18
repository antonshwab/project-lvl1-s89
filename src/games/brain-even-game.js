import { getRandomInt, isEven } from '../libs/math';

const getAnswer = (int) => {
  if (isEven(int)) {
    return 'yes';
  }
  return 'no';
};

const prepareRiddlesWithAnswers = () => {
  const minInt = 0;
  const maxInt = 100;
  const riddles =
    [getRandomInt(minInt, maxInt), getRandomInt(minInt, maxInt), getRandomInt(minInt, maxInt)];
  const riddlesWithAnswers = riddles.map(riddle => [riddle, getAnswer(riddle)]);
  return riddlesWithAnswers;
};

const rules = 'Answer "yes" if number even otherwise answer "no".\n';

const riddlesWithAnswers = prepareRiddlesWithAnswers();

const brainEvenGame = {
  rules,
  riddlesWithAnswers,
};

export default brainEvenGame;
