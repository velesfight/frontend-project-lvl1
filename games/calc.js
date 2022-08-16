import generalGame from '../src/index.js';
import getRandomInt from '../src/fails.js';

const taskGame = 'What is the result of the expression?';

const gameRound = () => {
  const number1 = getRandomInt(10);
  const number2 = getRandomInt(10);
  const sign = ['-', '+', '*'];
  const signs = getRandomInt(sign.length - 1);
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
  const round = String(answer);
  return [number, round];
};
export default function letsGo() {
  generalGame(taskGame, gameRound);
}
