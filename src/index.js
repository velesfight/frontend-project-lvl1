import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');

export const userName = readlineSync.question('May I have your name? ');
export default userName;
const Randnumber = () => Math.floor(Math.random() * 100);
const number = Randnumber();
const youAnswer = readlineSync.question('You answer: ');
console.log(`'${youAnswer}' is wrong answer ;(. Corrrect answer was '${answer}'. \nLet's try again, ${userName}!`);
console.log(`Congratulations, ${userName}!`);
if ()