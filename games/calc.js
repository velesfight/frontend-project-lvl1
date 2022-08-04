import readlineSync from 'readline-sync';
import generalGame from '../src/index.js';

const generalGame = (taskGame, gameRound) => {
const taskGame = 'What is the result of the expression?';
const gameQuestion = readlineSync.question(`Question: ${number}`);
const youAnswer = readlineSync.question('Your answer: ');
  const gameRound = () => {
  const Randnumber = () => Math.floor(Math.random() * 10);
  const number1 = Randnumber();
  const number2 = Randnumber();
  const sign = ['-', '+', '*'];
  const signs = Math.floor(Math.random() * sign.length);
  const signsRand = sign[signs];
  const number = `${number1} ${signsRand} ${number2}`;
  let answer = 0;
  switch (signsRand) {
    case '-':
      answer = number1 - number2;
      break;
    case '+':
      answer = number1 + number2;
      break;
    case '*':
      answer = number1 * number2;
      break;
    default:
      answer = null;
  }
    const round = (Number(youAnswer));
  return gameRound(number, round);
}
};
