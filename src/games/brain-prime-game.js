import { getRandomInt, isPrime } from '../libs/math';


const putRiddleWithAnswer = () => {
  const int = getRandomInt(0, 50);
  const riddle = `${int}`;
  const answer = isPrime(int) ? 'yes' : 'no';
  return [riddle, answer];
};
const rules = 'Is prime?\n';

const riddlesWithAnswers = Array.from({ length: 3 }, putRiddleWithAnswer);

const brainPrimeGame = {
  rules,
  riddlesWithAnswers,
};

export default brainPrimeGame;
