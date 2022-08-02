import generalGame from '../src/index.js';

export taskGame = 'Answer "yes" if the number is even, otherwise answer "no".';
const Randnumber = () => Math.floor(Math.random() * 10);
for (let i = 1; i <= 3; i += 1) {
  const example = Randnumber();
  const true1 = example % 2 === 0 && youAnswer === 'yes';
  const true2 = example % 2 !== 0 && youAnswer === 'no';
  if (true1 === true || true2 === true) {
    console.log('Correct!');
  } else {
    const answer = (youAnswer === 'yes' ? 'no' : 'yes');
  }
};
