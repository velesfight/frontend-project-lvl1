import generalGame from '../src/index.js';

const taskGame = 'Answer "yes" if the number is even, otherwise answer "no".';

const gameRound = () => {
  const Randnumber = () => Math.floor(Math.random() * 10);
  const questionUser = Randnumber();
  const numberEven = (questionUser % 2 === 0);
  const answerUser = numberEven ? 'yes' : 'no';
  return [questionUser, answerUser];
};
export default function letsGo() {
  generalGame(taskGame, gameRound);
}
