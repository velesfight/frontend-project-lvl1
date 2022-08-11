import generalGame from '../src/index.js';

const taskGame = 'Answer "yes" if the number is even, otherwise answer "no".';

const gameRound = () => {
  const Randnumber = () => Math.floor(Math.random() * 10);
  const number = Randnumber();
  const numberEven = (number % 2 === 0);
  const round = numberEven ? 'yes' : 'no';
  return (number, round);
};
generalGame(taskGame, gameRound);
