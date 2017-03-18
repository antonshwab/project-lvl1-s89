import { getRandomInt } from '../libs/math';

const putRiddleWithAnswer = () => {
  const variant = getRandomInt(1, 3);
  const arg1 = getRandomInt(1, 100);
  const arg2 = getRandomInt(1, 100);
  let riddle;
  let answer;
  switch (variant) {
    case 1:
      riddle = `${arg1} * ${arg2}`;
      answer = `${arg1 * arg2}`;
      break;
    case 2:
      riddle = `${arg1} - ${arg2}`;
      answer = `${arg1 - arg2}`;
      break;
    case 3:
      riddle = `${arg1} + ${arg2}`;
      answer = `${arg1 + arg2}`;
      break;
    default:
      break;
  }
  return [riddle, answer];
};

const rules = 'What is the result of the expression?\n';

const riddlesWithAnswers = Array.from({ length: 3 }, putRiddleWithAnswer);

const brainCalcGame = {
  rules,
  riddlesWithAnswers,
};

export default brainCalcGame;
