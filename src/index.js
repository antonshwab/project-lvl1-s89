import readlineSync from 'readline-sync';

const playGame = (game) => {
  const { rule, riddlesWithAnswers } = game;

  const doGreeting = () => {
    console.log('Welcome to the Brain Games!\n');
    console.log(`${rule}\n`);
    const playerName = readlineSync.question('May I have your name, human being? ');
    console.log(`Hello, dear ${playerName}!\n`);
    return playerName;
  };

  const respondToCorrectAnswer = (playerAnswer) => {
    console.log(`Your answer: ${playerAnswer}`);
    console.log('Correct!\n');
  };

  const respondToWrongAnswer = (playerAnswer, correctAnswer, playerName) => {
    console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
    console.log(`Let's try again, ${playerName})\n`);
  };

  const getGameResult = (riddlesAndAnswers, playerName) => {
    let isPlayerWin = true;
    riddlesAndAnswers.forEach(([riddle, correctAnswer]) => {
      const playerAnswer = readlineSync.question(`Question: ${riddle}\n`);
      if (playerAnswer === correctAnswer) {
        respondToCorrectAnswer(playerAnswer);
      } else {
        respondToWrongAnswer(playerAnswer, correctAnswer, playerName);
        isPlayerWin = false;
      }
    });
    return isPlayerWin;
  };

  const play = (riddlesAndAnswers, playerName) => {
    const isPlayerWin = getGameResult(riddlesAndAnswers, playerName);

    if (isPlayerWin) {
      console.log(`Congratulations, ${playerName}!\n`);
    } else {
      console.log(`Ha-ha! ${playerName}, you lose!\n`);
    }
  };

  const playerName = doGreeting();
  play(riddlesWithAnswers, playerName);
};

export default playGame;
