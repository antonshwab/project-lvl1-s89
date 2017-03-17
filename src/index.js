import readlineSync from 'readline-sync';

const playGame = (game) => {
  const { rules, data } = game;

  const doGreeting = () => {
    console.log('Welcome to the Brain Games!\n');
    console.log(rules);
    const playerName = readlineSync.question('May I have your name, human being? ');
    console.log(`Hello, dear ${playerName}!\n`);
    return playerName;
  };

  const play = (gameData, playerName) => {
    const respondToCorrectAnswer = (playerAnswer) => {
      console.log(`Your answer: ${playerAnswer}`);
      console.log('Correct!\n');
    };

    const respondToWrongAnswer = (playerAnswer, correctAnswer) => {
      console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
      console.log(`Let's try again, ${playerName})\n`);
    };

    const go = () => {
      let outcome = true;
      gameData.forEach(([riddle, correctAnswer]) => {
        const playerAnswer = readlineSync.question(`Question: ${riddle}\n`);
        if (playerAnswer === correctAnswer) {
          respondToCorrectAnswer(playerAnswer);
        } else {
          respondToWrongAnswer(playerAnswer, correctAnswer, playerName);
          outcome = false;
        }
      });
      return outcome;
    };

    const isPlayerWin = go();

    if (isPlayerWin) {
      console.log(`Congratulations, ${playerName}!\n`);
    } else {
      console.log(`Ha-ha! ${playerName}, you lose!\n`);
    }
  };

  const playerName = doGreeting();
  play(data, playerName);
};

export default playGame;
