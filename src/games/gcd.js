import readlineSync from 'readline-sync';
import greetings from '../cli.js';
import { randomNum, getCondition } from '../index.js';

console.log('brain-gcd \n');

function loop(x, y, n) {
  let num = n;
  for (let i = 0; i < n; num -= 1) {
    if (x % num === 0 && y % num === 0) {
      break;
    }
  }
  return num;
}

const name = greetings();
const rule = 'Find the greatest common divisor of given numbers.';
function nod() {
  console.log(rule);
  let counter = 0;
  for (let i = 0; i < 3; i += 1) {
    const x = randomNum(1, 100);
    const y = randomNum(1, 100);
    let n = x > y ? y : x;
    const quest = `Question: ${x} ${y} \nYour answer: `;
    const userAnswer = readlineSync.question(quest);
    n = loop(x, y, n);
    counter += 1;
    const bool = getCondition(n, +userAnswer, name, counter);
    if (bool === 'false') {
      break;
    }
  }
}

export default nod;
