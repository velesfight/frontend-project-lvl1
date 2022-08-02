import generalGame from '../src/index.js';

const taskGame = 'What is the result of the expression?';
for (let i = 1; i <= 3; i += 1) {
  const Randnumber = () => Math.floor(Math.random() * 10);
  const number1 = Randnumber();
  const number2 = Randnumber();
  const sign = ['-', '+', '*'];
  const signs = Math.floor(Math.random() * sign.length);
  const signsRand = sign[signs];
  const example = `${number1} ${signsRand} ${number2}`;

  let answer = 0;
  switch (signsRand) {
    case '-':
      answer = number1 - number2;
      break;
    case '+':
      answer = number1 + number2;
      break;
    case '*':
      answer = number1 * number2;
      break;
    default:
      answer = null;
  }
  const youAnswer = (Number(youAnswer));
};
;