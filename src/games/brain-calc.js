import generalGame from '../index.js';
import getRandomInt from '../generalFail.js';

const taskGame = 'What is the result of the expression?';

const calcExample = (num1, num2, simbol) => {
  switch (simbol) {
    case '-':
      return num1 - num2;
    case '+':
      return num1 + num2;
    case '*':
      return num1 * num2;
    default:
      return null;
  }
};

const gameRound = () => {
  const number1 = getRandomInt(10);
  const number2 = getRandomInt(10);
  const sign = ['-', '+', '*'];
  const signs = getRandomInt(sign.length - 1);
  const signsRand = sign[signs];
  const questionUser = `${number1} ${signsRand} ${number2}`;
  const answerUser = String(calcExample(number1, number2, signsRand));
  return [questionUser, answerUser];
};
const startGameCalc = () => {
  generalGame(taskGame, gameRound);
};
export default startGameCalc;
