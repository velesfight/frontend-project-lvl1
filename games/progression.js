import generalGame from '../src/index.js';
import getRandomInt from '../src/fails.js';

const taskGame = 'What number is missing in the progression?';

const numProg = (number1, step, lenght) => {
  const progr = [];
  for (let i = 0; i < lenght; i += 1) {
    const nextNumber = number1 + i * step;
    progr.push(nextNumber);
  }
  return progr;
};

const gameRound = () => {
  const number1 = getRandomInt(10);
  const lenght = 6;
  const step = 2;
  const progression = numProg(number1, step, lenght);
  const point = '..';
  const index = getRandomInt(lenght);
  const answerUser = progression[index];
  progression[index] = point;
  const questionUser = progression.join(' ');
  return [questionUser, String(answerUser)];
};

export default function letsGo() {
  generalGame(taskGame, gameRound);
}
