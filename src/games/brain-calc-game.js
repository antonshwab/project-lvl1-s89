import { getRandomInt } from '../libs/math';

const putRandomOp = () => {
  const possibleOperators = ['*', '-', '+'];
  const minOperatorIndex = 0;
  const maxOperatorIndex = possibleOperators.length - 1;
  const randomOperatorIndex = getRandomInt(minOperatorIndex, maxOperatorIndex);
  return possibleOperators[randomOperatorIndex];
};

const putRandomArg = () => {
  const minArg = 0;
  const maxArg = 100;
  const randomArgument = getRandomInt(minArg, maxArg);
  return randomArgument;
};

const putRandomExp = () => [putRandomOp(), putRandomArg(), putRandomArg()];

const makeExpressions = expressionsCount =>
  Array.from({ length: expressionsCount }, putRandomExp);

const getRiddle = (expression) => {
  const [op, arg1, arg2] = expression;
  return `${arg1} ${op} ${arg2}`;
};

const getAnswer = (expression) => {
  const [op, arg1, arg2] = expression;
  console.log(op, arg1, arg2);
  let result;
  switch (op) {
    case '*':
      result = arg1 * arg2;
      break;
    case '-':
      result = arg1 - arg2;
      break;
    case '+':
      result = arg1 + arg2;
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
