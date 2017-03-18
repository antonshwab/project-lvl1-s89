import { generateRandomIntegers, getRandomInt } from '../libs/math';

const makeRandomArguments = (argsCount, minArg, maxArg) =>
  generateRandomIntegers(argsCount, minArg, maxArg);

const putRandomOperator = () => {
  const possibleOperators = ['*', '-', '+'];
  const minOperatorIndex = 0;
  const maxOperatorIndex = possibleOperators.length - 1;
  const randomOperatorIndex = getRandomInt(minOperatorIndex, maxOperatorIndex);
  return possibleOperators[randomOperatorIndex];
};

const makeRandomOperators = operatorsCount =>
  Array.from({ length: operatorsCount }, putRandomOperator);

const makeExpressions = (expressionsCount) => {
  const operatorsCount = expressionsCount;
  const argsCount = expressionsCount;
  const minArg = 0;
  const maxArg = 100;
  const leftArgs = makeRandomArguments(argsCount, minArg, maxArg);
  const rightArgs = makeRandomArguments(argsCount, minArg, maxArg);
  const operators = makeRandomOperators(operatorsCount);
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
  const expressionsCount = riddlesCount;
  const expressions = makeExpressions(expressionsCount);
  const riddlesWithAnswers = expressions
        .reduce((acc, exp) => [...acc, [getRiddle(exp), getAnswer(exp)]], []);
  return riddlesWithAnswers;
};

const rules = 'What is the result of the expression?';

const riddlesCount = 3;
const riddlesWithAnswers = prepareRiddlesWithAnswers(riddlesCount);

const brainCalcGame = {
  rules,
  riddlesWithAnswers,
};

export default brainCalcGame;
