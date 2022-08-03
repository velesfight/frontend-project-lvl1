import generalGame from '../src/index.js';

export default generalGame = () => {
const taskGame = 'What is the result of the expression?';
const gameQuestion = readlineSync.question(`Question: ${number}`);
const youAnswer = readlineSync.question('Your answer: ');

  const Randnumber = () => Math.floor(Math.random() * 10);
  const number1 = Randnumber();
  const number2 = Randnumber();
  const sign = ['-', '+', '*'];
  const signs = Math.floor(Math.random() * sign.length);
  const signsRand = sign[signs];
  const number = `${number1} ${signsRand} ${number2}`;
  const gameRound = () => {
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
  return(number, round)
};
