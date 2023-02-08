import readlineSync from 'readline-sync';
import greetings from '../cli.js';
import { randomNum, getCondition } from '../index.js';

console.log('brain-calc \n');

const name = greetings();
const rule = 'What is the result of the expression?';

function calc() {
  console.log(rule);
  let counter = 0;
  for (let i = 0; i < 3; i += 1) {
    const x = randomNum(1, 100);
    const y = randomNum(1, 100);
    const arrSym = ['+', '*', '-'];
    const symbol = arrSym[randomNum(0, 2)];
    const quest = `Question: ${x} ${symbol} ${y} \n`;
    const userAnswer = readlineSync.question(quest);
    let result = 0;
    switch (symbol) {
      case arrSym[0]:
        result = x + y;
        break;
      case arrSym[1]:
        result = x * y;
        break;
      case arrSym[2]:
        result = x - y;
        break;
      default:
    }
    counter += 1;
    const bool = getCondition(result, +userAnswer, name, counter);
    if (bool === 'false') {
      break;
    }
  }
}

export default calc;
