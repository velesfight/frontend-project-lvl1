import readlineSync from 'readline-sync';

export default (taskGame, gameRound) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hi, ${userName}!`);
  console.log(taskGame);

  const roundCount = 3;
  for (let i = 0; i < roundCount; i += 1) {
    const [question, answer] = gameRound();
    const roundQuestion = `Question: ${question}`;
    console.log(roundQuestion);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === answer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Corrrect answer was '${answer}'. \nLet's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
