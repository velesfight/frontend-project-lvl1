import generalGame from '../index.js';
import getRandomInt from '../generalFail.js';

const taskGame = 'What number is missing in the progression?';

const isProgression = (number, step, lenght) => {
  const progr = [];
  for (let i = 0; i < lenght; i += 1) {
    const nextNumber = number + i * step;
    progr.push(nextNumber);
  }
  return progr;
};

const gameRound = () => {
  const number = getRandomInt(10);
  const lenght = 6;
  const step = 2;
  const progression = isProgression(number, step, lenght);
  const point = '..';
  const index = getRandomInt(lenght);
  const answerUser = progression[index];
  progression[index] = point;
  const questionUser = progression.join(' ');
  return [questionUser, String(answerUser)];
};

const startGameProgres = () => {
  generalGame(taskGame, gameRound);
};
export default startGameProgres;
