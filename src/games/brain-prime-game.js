import { getRandomInt, isPrime } from '../libs/math';


const putRiddleWithAnswer = () => {
  const int = getRandomInt(0, 50);
  const riddle = `${int}`;
  const answer = isPrime(int) ? 'yes' : 'no';
  return [riddle, answer];
};
const rule = 'Is prime?';

const riddlesWithAnswers = Array.from({ length: 3 }, putRiddleWithAnswer);

const brainPrimeGame = {
  rule,
  riddlesWithAnswers,
};

export default brainPrimeGame;
