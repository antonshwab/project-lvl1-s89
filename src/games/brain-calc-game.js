import { generateRandomIntegers } from '../libs/math';

const makeRandomOperators = (riddlesCount) => {
  const operators = ['*', '-', '+'];
  const operatorsCount = operators.length;
  const randomIndexes = generateRandomIntegers(riddlesCount, 0, operatorsCount - 1);
  const randomOperators = randomIndexes.map(i => operators[i]);
  return randomOperators;
};

const getExpressions = (operators, leftArgs, rightArgs) => {
  const zipped = operators.reduce((acc, op, index) => {
    const leftArg = leftArgs[index];
    const rightArg = rightArgs[index];
    return [...acc, [op, leftArg, rightArg]];
  }, []);
  return zipped;
};

const getAnswer = (expression) => {
  const [op, leftArg, rightArg] = expression;
  let result;
  switch (op) {
    case '*':
      result = leftArg * rightArg;
      break;
    case '-':
      result = leftArg - rightArg;
      break;
    case '+':
      result = leftArg + rightArg;
      break;
    default:
      console.log('Wrong operator.');
  }
  return JSON.stringify(result);
};

const stringifyExp = (exp) => {
  const [op, leftArg, rightArg] = exp;
  return `${leftArg} ${op} ${rightArg}`;
};

const prepareGameData = (riddlesCount, minArg, maxArg) => {
  const rightArgs = generateRandomIntegers(riddlesCount, minArg, maxArg);
  const leftArgs = generateRandomIntegers(riddlesCount, minArg, maxArg);
  const randomOperators = makeRandomOperators(riddlesCount);
  const expressions = getExpressions(randomOperators, leftArgs, rightArgs);
  const data = expressions.reduce((acc, exp) => [...acc, [stringifyExp(exp), getAnswer(exp)]], []);
  return data;
};

const makeBrainCalcGame = () => {
  const rules = 'What is the result of the expression?';
  const data = prepareGameData(3, 0, 100);
  const game = {
    rules,
    data,
  };
  return game;
};

export default makeBrainCalcGame;
