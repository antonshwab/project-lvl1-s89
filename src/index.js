import readlineSync from 'readline-sync';

const sayWelcome = () => {
  console.log('Welcome to the Brain Games!\n');
};

const getUsername = () => {
  const name = readlineSync.question('May I have your name, human being? ');
  return name;
};

const makeGreeting = () => {
  const name = getUsername();
  console.log(`Hello, dear ${name}!\n`);
  return name;
};

const playBrainEven = () => {
  const gameState = {
    outcome: true,
    username: '',
    rules: 'Answer "yes" if number even otherwise answer "no".\n',
  };

  const setUsername = (name) => {
    gameState.username = name;
  };

  const sayRules = () => {
    const rules = gameState.rules;
    console.log(rules);
  };

  const generateRandomIntegers = (count, min, max) => {
    const getRandomInt = () => Math.floor(Math.random() * (max - min)) + min;
    const randomIntegers = Array.from({ length: count }, getRandomInt);
    return randomIntegers;
  };

  const respondToCorrectAns = (userAnswer) => {
    console.log(`Your answer: ${userAnswer}`);
    console.log('Correct!\n');
  };

  const respondToWrongAns = (userAnswer, correctAnswer) => {
    const name = gameState.username;
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
    console.log(`Let's try again, ${name})\n`);
  };

  const setFailedOutcome = () => {
    gameState.outcome = false;
  };

  const finishGame = () => {
    const name = gameState.username;
    const isWin = gameState.outcome;
    if (isWin) {
      console.log(`Congratulations, ${name}!\n`);
    } else {
      console.log(`Ha-ha! ${name}, you lose!\n`);
    }
  };

  const prepareGameData = () => {
    const integers = generateRandomIntegers(3, 0, 100);

    const integersWithAnswers = integers.map((int) => {
      const isEven = i => i % 2 === 0;
      if (isEven(int)) {
        return [int, 'yes'];
      }
      return [int, 'no'];
    });

    return integersWithAnswers;
  };

  const play = () => {
    const gameData = prepareGameData();

    gameData.forEach(([int, correctAnswer]) => {
      const userAnswer = readlineSync.question(`Question: ${int}\n`);
      if (userAnswer === correctAnswer) {
        respondToCorrectAns(userAnswer);
      } else {
        respondToWrongAns(userAnswer, correctAnswer);
        setFailedOutcome();
      }
    });

    finishGame();
  };

  sayWelcome();

  sayRules();

  const name = makeGreeting();

  setUsername(name);

  play();
};

export { sayWelcome, makeGreeting, playBrainEven };

