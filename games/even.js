import readlineSync from 'readline-sync';
import generalGame from '../src/index.js';

const generalGame = (taskGame, gameRound) => {
const taskGame = 'Answer "yes" if the number is even, otherwise answer "no".';
const gameQuestion = readlineSync.question(`Question: ${number}`);
const youAnswer = readlineSync.question('Your answer: ');
const gameRound = () => {
  const Randnumber = () => Math.floor(Math.random() * 10);
  const number = Randnumber();
  const numberEven = (number % 2 === 0);
  const round = numberEven ? 'yes' : 'no';
  return gameRound(number, round);
}
};
