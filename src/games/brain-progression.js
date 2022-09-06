import runGame from '../index.js';
import getRandomInt from '../support.js';

const taskGame = 'What number is missing in the progression?';

const getProgression = (number, step, lenght) => {
  const progression = [];
  for (let i = 0; i < lenght; i += 1) {
    const nextNumber = number + i * step;
    progression.push(nextNumber);
  }
  return progression;
};

const gameRound = () => {
  const number = getRandomInt(0, 10);
  const lenghtProgression = getRandomInt(5, 10);
  const step = getRandomInt(2, 5);
  const progression = getProgression(number, step, lenghtProgression);
  const indexAnswer = getRandomInt(0, lenghtProgression - 1);
  const placeholde = '..';
  const answer = String(progression[indexAnswer]);
  progression[indexAnswer] = placeholde;
  const question = progression.join(' ');
  return [question, answer];
};

const startGameProgres = () => {
  runGame(taskGame, gameRound);
};
export default startGameProgres;
