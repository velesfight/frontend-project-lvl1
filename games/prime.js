import generalGame from '../src/index.js';
import getRandomInt from '../src/fails.js';

const taskGame = 'Answer "yes" if given number is prime. Otherwise answer "no"';
const primeNum = (num) => {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const gameRound = () => {
  const number1 = getRandomInt(50);
  const answerUser = primeNum(number1) ? 'yes' : 'no';
  const questionUser = String(number1);
  return [questionUser, answerUser];
};

export default function letsGo() {
  generalGame(taskGame, gameRound);
}
