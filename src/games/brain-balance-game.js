import { generateRandomIntegers, digitsToString, intToDigits, ascNumSort } from '../libs/math';

const getMinDigit = sortedDigits => sortedDigits[0];

const getMaxDigit = sortedDigits => sortedDigits[sortedDigits.length - 1];

const getMiddleDigits = sortedDigits => sortedDigits.slice(1, sortedDigits.length - 1);

const isBalancedDigits = (sortedDigits) => {
  const minDigit = getMinDigit(sortedDigits);
  const maxDigit = getMaxDigit(sortedDigits);
  if (maxDigit - minDigit <= 1) {
    return true;
  }
  return false;
};

const balanceDigits = (digits) => {
  const sortedDigits = ascNumSort(digits);

  const minDigit = getMinDigit(sortedDigits);
  const maxDigit = getMaxDigit(sortedDigits);
  const middleDigits = getMiddleDigits(sortedDigits);

  if (isBalancedDigits(sortedDigits)) {
    return sortedDigits;
  }

  return balanceDigits([minDigit + 1, maxDigit - 1, ...middleDigits]);
};

const getRiddle = int => `${int}`;

const getAnswer = (int) => {
  const digits = intToDigits(int);
  const balancedDigits = balanceDigits(digits);
  return digitsToString(balancedDigits);
};

const prepareRiddlesWithAnswers = (riddlesCount) => {
  const intMin = 10;
  const intMax = 999;
  const integersCount = riddlesCount;
  const integers = generateRandomIntegers(integersCount, intMin, intMax);
  const riddlesWithAnswers = integers
        .reduce((acc, int) => [...acc, [getRiddle(int), getAnswer(int)]], []);
  return riddlesWithAnswers;
};

const rules = 'Balance the given number.\n';

const riddlesCount = 3;
const riddlesWithAnswers = prepareRiddlesWithAnswers(riddlesCount);

const brainBalanceGame = {
  rules,
  riddlesWithAnswers,
};

export default brainBalanceGame;
