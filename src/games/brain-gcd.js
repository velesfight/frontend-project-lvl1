import runGame from '../index.js';
import getRandomInt from '../support.js';

const taskGame = 'Find the greatest common divisor of given numbers';

const isGCD = (a, b) => {
  if (b > a) return isGCD(b, a);
  if (!b) return a;
  return isGCD(b, a % b);
};
const gameRound = () => {
  const number1 = getRandomInt(0, 100);
  const number2 = getRandomInt(0, 100);
  const question = `${number1} ${number2}`;
  const answer = String(isGCD(number1, number2));
  return [question, answer];
};
const startGameGCD = () => {
  runGame(taskGame, gameRound);
};
export default startGameGCD;
