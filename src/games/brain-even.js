import generalGame from '../index.js';

const taskGame = 'Answer "yes" if the number is even, otherwise answer "no".';

const gameRound = () => {
  const Randnumber = () => Math.floor(Math.random() * 10);
  const questionUser = Randnumber();
  const numberEven = (questionUser % 2 === 0);
  const answerUser = numberEven ? 'yes' : 'no';
  return [questionUser, answerUser];
};
const startGameEven = () => {
  generalGame(taskGame, gameRound);
};
export default startGameEven;
