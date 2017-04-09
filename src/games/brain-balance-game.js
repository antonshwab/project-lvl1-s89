import { digitsToString, intToDigits, ascNumSort, getRandomInt } from '../libs/math';

const balanceDigits = (digits) => {
  const sortedDigits = ascNumSort(digits);

  const minDigit = sortedDigits[0];
  const maxDigit = sortedDigits[sortedDigits.length - 1];
  const middleDigits = sortedDigits.slice(1, sortedDigits.length - 1);

  if (maxDigit - minDigit <= 1) {
    return sortedDigits;
  }

  return balanceDigits([minDigit + 1, maxDigit - 1, ...middleDigits]);
};

const getAnswer = (int) => {
  const digits = intToDigits(int);
  const balancedDigits = balanceDigits(digits);
  return digitsToString(balancedDigits);
};

const putRiddleWithAnswer = () => {
  const min = 10;
  const max = 99;
  const int = getRandomInt(min, max);
  const riddle = `${int}`;
  const answer = getAnswer(int);
  return [riddle, answer];
};

const rule = 'Balance the given number.\n';

const riddlesWithAnswers = Array.from({ length: 3 }, putRiddleWithAnswer);

const brainBalanceGame = {
  rule,
  riddlesWithAnswers,
};

export default brainBalanceGame;
