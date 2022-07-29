import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');

export const userName = readlineSync.question('May I have your name? ');
export default userName;
export const gameCalc = () => {
  console.log('What is the result of the expression?');
  for (let i = 1; i <= 3; i += 1) {
    const Randnumber = () => Math.floor(Math.random() * 10);
    const number1 = Randnumber();
    const number2 = Randnumber();
    const sign = ['-', '+', '*'];
    const signs = Math.floor(Math.random() * sign.length);
    const signsRand = sign[signs];
    const action = `${number1} ${signsRand} ${number2}`;

    let answerCalc = 0;
    switch (signsRand) {
      case '-':
        answerCalc = number1 - number2;
        break;
      case '+':
        answerCalc = number1 + number2;
        break;
      case '*':
        answerCalc = number1 * number2;
        break;
      default:
        answerCalc = null;
    }
    console.log(`Question: ${action}`);
    const youAnswer = readlineSync.question('You answer: ');
    if (answerCalc === (Number(youAnswer))) {
      console.log('Correct!');
    } else {
      console.log(`'${youAnswer}' is wrong answer ;(. Corrrect answer was '${answerCalc}'. \nLet's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
