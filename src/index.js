import readlineSync from 'readline-sync';

export default generalGame = (taskGame, gameRound) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hi, ${userName}!`);
  console.log(taskGame);

  const gameRound = (number, round) => {
    for (let i = 1; i <= 3; i += 1) {
    const Randnumber = () => Math.floor(Math.random() * 10);
    const gameQuestion = readlineSync.question(`Question: ${number}`);
    const youAnswer = readlineSync.question('Your answer: ');
    console.log(gameQuestion);
    console.log(youAnswer);
    if (youAnswer === round) {
      console.log('Correct!');
    } else {
      console.log(`'${youAnswer}' is wrong answer ;(. Corrrect answer was '${round}'. \nLet's try again, ${userName}!`);
      return;
    }
  }
  console.log(gameRound);
}
  console.log(`Congratulations, ${userName}!`);
};