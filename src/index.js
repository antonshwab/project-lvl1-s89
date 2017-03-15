import readlineSync from 'readline-sync';

const sayHello = () => {
  const name = readlineSync.question('May I have your name, human being? ');
  console.log(`Hello, dear ${name}!`);
};

export default sayHello;
