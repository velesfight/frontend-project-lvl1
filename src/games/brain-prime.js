import runGame from '../index.js';
import getRandomInt from '../support.js';

const taskGame = 'Answer "yes" if given number is prime. Otherwise answer "no"';
const isPrime = (num) => {
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
  const number1 = getRandomInt(0, 50);
  const answer = isPrime(number1) ? 'yes' : 'no';
  const question = String(number1);
  return [question, answer];
};

const startGamePrime = () => {
  runGame(taskGame, gameRound);
};
export default startGamePrime;
