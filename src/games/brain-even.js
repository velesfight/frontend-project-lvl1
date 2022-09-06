import runGame from '../index.js';
import getRandomInt from '../support.js';

const taskGame = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const gameRound = () => {
  const question = (getRandomInt(2, 100));
  const answer = isEven(question) ? 'yes' : 'no';
  return [question, answer];
};
const startGameEven = () => {
  runGame(taskGame, gameRound);
};
export default startGameEven;
