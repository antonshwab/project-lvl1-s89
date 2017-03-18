import { getRandomInt, isEven } from '../libs/math';

const putRiddleWithAnswer = () => {
  const minInt = 0;
  const maxInt = 100;
  const int = getRandomInt(minInt, maxInt);
  const riddle = `${int}`;
  const answer = isEven(int) ? 'yes' : 'no';
  return [riddle, answer];
};

const rules = 'Answer "yes" if number even otherwise answer "no".\n';

const riddlesWithAnswers = Array.from({ length: 3 }, putRiddleWithAnswer);

const brainEvenGame = {
  rules,
  riddlesWithAnswers,
};

export default brainEvenGame;
