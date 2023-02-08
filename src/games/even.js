import readlineSync from 'readline-sync';
import { randomNum, getCondition } from '../index.js';
import greetings from '../cli.js';

const name = greetings();
const rule = 'Answer "yes" if the number is even, otherwise answer "no".';
function evenGame() {
  console.log(rule);
  let counter = 0;
  for (let i = 0; i < 3; i += 1) {
    const x = randomNum(1, 100);
    const isEven = (num) => num % 2 === 0;
    const correctAnswer = isEven(x) ? 'yes' : 'no';
    const quest = `Question: ${x} \n`;
    const userAnswer = readlineSync.question(quest);
    counter += 1;
    const bool = getCondition(correctAnswer, userAnswer, name, counter);
    if (bool === 'false') {
      break;
    }
  }
}

export default evenGame;
