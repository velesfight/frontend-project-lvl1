import generalGame from '../index.js';
import getRandomInt from '../generalFail.js';

const taskGame = 'Find the greatest common divisor of given numbers';

const isNod = (a, b) => {
  if (b > a) return isNod(b, a);
  if (!b) return a;
  return isNod(b, a % b);
};
const gameRound = () => {
  const number1 = getRandomInt(100);
  const number2 = getRandomInt(100);
  const questionUser = `${number1} ${number2}`;
  const answerUser = String(isNod(number1, number2));
  return [questionUser, answerUser];
};
const startGameGcd = () => {
  generalGame(taskGame, gameRound);
};
export default startGameGcd;
