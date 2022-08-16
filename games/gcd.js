import generalGame from '../src/index.js';
import getRandomInt from '../src/fails.js';

const taskGame = 'Find the greatest common divisor of given numbers';

const NOD = (a, b) => {
  if (b > a) return NOD(b, a);
  if (!b) return a;
  return NOD(b, a % b);
};
const gameRound = () => {
  const number1 = getRandomInt(100);
  const number2 = getRandomInt(100);
  const number = `${number1} ${number2}`;
  const round = String(NOD(number1, number2));
  return [number, round];
};
export default function letsGo() {
  generalGame(taskGame, gameRound);
}
