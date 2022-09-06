import runGame from '../index.js';
import getRandomInt from '../support.js';

const taskGame = 'What is the result of the expression?';

const calculate = (num1, num2, simbol) => {
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
  const number1 = getRandomInt(0, 10);
  const number2 = getRandomInt(0, 10);
  const operators = ['-', '+', '*'];
  const operatorIndex = getRandomInt(0, operators.length - 1);
  const operator = operators[operatorIndex];
  const question = `${number1} ${operator} ${number2}`;
  const answer = String(calculate(number1, number2, operator));
  return [question, answer];
};
const startGameCalc = () => {
  runGame(taskGame, gameRound);
};
export default startGameCalc;
