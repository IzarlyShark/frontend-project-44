import readlineSync from 'readline-sync';

let name;

function greetings() {
  console.log('Welcome to the Brain Games!');
  name = readlineSync.question('May I have your name? ');
  console.log(`Hi ${name} !`);
}

function evenGame() {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const min = 1;
  const max = 100;
  let counter = 0;
  for (let i = 0; i < 3; i += 1) {
    const x = Math.floor(Math.random() * (max - min + 1) + min);
    const isEven = (num) => num % 2 === 0;
    const correctAnswer = isEven(x) ? 'yes' : 'no';
    const userAnswer = readlineSync.question(`Question:${x} \n`);
    if (correctAnswer === userAnswer) {
      console.log('Correct!');
      counter += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. Let's try again, ${name}!`);
      break;
    }
  }
  if (counter === 3) {
    console.log(`Congratulations, ${name}!`);
  }
}

export { greetings, evenGame };
