import generalGame from '../src/index.js';
import getRandomInt from '../src/fails.js';

const taskGame = 'What number is missing in the progression?';

const numProg = (number1, step, lenghtMas) => {
  const progr = [];
  for (let i = number1; i < lenghtMas; i += step) {
    progr.push(i);
  }
  return progr;
}

  const gameRound = () => {
    const MasForUser = [];
    const number1 = getRandomInt(100);
    const lenghtMas = 6;
    const step = 2;
    const progression = numProg(number1, step, lenghtMas);
    const point = '..';
    const index = getRandomInt(progr.lenght - 1);
    const number = progression.splice(index, 1, point);
    const round = 