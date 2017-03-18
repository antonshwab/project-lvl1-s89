import { getRandomInt } from '../libs/math';

const getRandomProgression = () => {
  const initValue = getRandomInt(0, 10);
  const step = getRandomInt(1, 10);
  let mutableValue = initValue;

  const putNextValue = () => {
    mutableValue += step;
    return mutableValue;
  };

  return [initValue, ...Array.from({ length: 9 }, putNextValue)];
};

const putRiddleWithAnswer = () => {
  const progression = getRandomProgression();
  const spaceIndex = getRandomInt(0, 9);
  const copyProgression = progression.slice();
  copyProgression[spaceIndex] = '..';
  const riddle = copyProgression.join(' ');
  const answer = `${progression[spaceIndex]}`;
  return [riddle, answer];
};

const rules = 'What number is missing in this progression?\n';

const riddlesWithAnswers = Array.from({ length: 3 }, putRiddleWithAnswer);

const brainProgressionGame = {
  rules,
  riddlesWithAnswers,
};

export default brainProgressionGame;
