import generalGame from '../index.js';
import getRandomInt from '../generalFail.js';

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
  const number1 = getRandomInt(50);
  const answerUser = isPrime(number1) ? 'yes' : 'no';
  const questionUser = String(number1);
  return [questionUser, answerUser];
};

const startGamePrime = () => {
  generalGame(taskGame, gameRound);
};
export default startGamePrime;
