import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');

export const userName = readlineSync.question('May I have your name? ');
export default userName;
export const startGame = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const Randnumber = () => Math.floor(Math.random() * 100);
  for (let i = 1; i <= 3; i += 1) {
    const number = Randnumber();
    console.log(`Question: ${number}`);
    const youAnswer = readlineSync.question('You answer: ');
    const true1 = number % 2 === 0 && youAnswer === 'yes';
    const true2 = number % 2 !== 0 && youAnswer === 'no';
    if (true1 === true || true2 === true) {
      console.log('Correct!');
    } else {
      const answer = (youAnswer === 'yes' ? 'no' : 'yes');
      console.log(`'${youAnswer}' is wrong answer ;(. Corrrect answer was '${answer}'. \nLet's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
