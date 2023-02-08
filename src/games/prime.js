import readlineSync from 'readline-sync';
import greetings from '../cli.js';
import { randomNum, getCondition } from '../index.js';

function loop(num) {
  let result = num === 1 ? 'no' : 'yes';
  for (let i = 2; i <= num - 1; i += 1) {
    result = num % i === 0 ? 'no' : 'yes';
    if (result === 'no') break;
  }
  return result;
}

const name = greetings();
const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';
function getPrime() {
  console.log('brain-prime \n');
  console.log(rule);
  let counter = 0;
  for (let i = 0; i < 3; i += 1) {
    const num = randomNum(1, 100);
    const quest = `Question: ${num} \nYour answer: `;
    const userAnswer = readlineSync.question(quest);
    const result = loop(num);
    counter += 1;
    const bool = getCondition(result, userAnswer, name, counter);
    if (bool === 'false') {
      break;
    }
  }
}
export default getPrime;
