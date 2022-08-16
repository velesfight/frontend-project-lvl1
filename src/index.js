import readlineSync from 'readline-sync';

const generalGame = (taskGame, gameRound) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hi, ${userName}!`);
  console.log(taskGame);

  for (let i = 0; i < 3; i += 1) {
    const [number, round] = gameRound();
    const gameQuestion = `Question: ${number}`;
    console.log(gameQuestion);
    const youAnswer = readlineSync.question('Your answer: ');
    if (youAnswer === round) {
      console.log('Correct!');
    } else {
      console.log(`'${youAnswer}' is wrong answer ;(. Corrrect answer was '${round}'. \nLet's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
export default generalGame;
