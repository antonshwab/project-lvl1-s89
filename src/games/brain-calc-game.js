import { generateRandomIntegers } from '../libs/math';

const makeRandomOperators = (operatorsCount) => {
  const possibleOperators = ['*', '-', '+'];
  const getRandomOperator = (operators, randomIndex) => operators[randomIndex];
  const randomIndexes = generateRandomIntegers(operatorsCount, 0, operatorsCount - 1);
  const randomOperators = randomIndexes.map(index => getRandomOperator(possibleOperators, index));
  return randomOperators;
};

const makeExpressions = (operators, leftArgs, rightArgs) => {
  const expressions = operators.reduce((acc, op, index) => {
    const leftArg = leftArgs[index];
    const rightArg = rightArgs[index];
    return [...acc, [op, leftArg, rightArg]];
  }, []);
  return expressions;
};

const getRiddle = (expression) => {
  const [op, leftArg, rightArg] = expression;
  return `${leftArg} ${op} ${rightArg}`;
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

const prepareRiddlesWithAnswers = (riddlesCount) => {
  const minArg = 0;
  const maxArg = 100;
  const leftArgs = generateRandomIntegers(riddlesCount, minArg, maxArg);
  const rightArgs = generateRandomIntegers(riddlesCount, minArg, maxArg);
  const operators = makeRandomOperators(riddlesCount);
  const expressions = makeExpressions(operators, leftArgs, rightArgs);
  const riddlesWithAnswers = expressions
    .reduce((acc, exp) => [...acc, [getRiddle(exp), getAnswer(exp)]], []);
  return riddlesWithAnswers;
};

const rules = 'What is the result of the expression?';
const riddlesWithAnswers = prepareRiddlesWithAnswers(3);

const brainCalcGame = {
  rules,
  riddlesWithAnswers,
};

export default brainCalcGame;
