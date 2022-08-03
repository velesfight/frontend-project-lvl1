import generalGame from '../src/index.js';

export default generalGame = () => {
const taskGame = 'Answer "yes" if the number is even, otherwise answer "no".';
const gameQuestion = readlineSync.question(`Question: ${number}`);
const youAnswer = readlineSync.question('Your answer: ');

const Randnumber = () => Math.floor(Math.random() * 10);
const gameRound = () => {
  const number = Randnumber();
  const numberEven = (number % 2 === 0);
  const round = numberEven ? 'yes' : 'no';
  return (number, round);
};
