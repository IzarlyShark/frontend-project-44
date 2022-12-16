#!/usr/bin/env node
import readlineSync from 'readline-sync';
import greetings from '../cli.js';
import { randomNum, getCondition } from '../index.js';

console.log('brain-calc \n');

function calc() {
  const name = greetings();
  console.log('What is the result of the expression?');
  let counter = 0;
  for (let i = 0; i < 3; i += 1) {
    const x = randomNum(1, 100);
    const y = randomNum(1, 100);
    const arrSym = ['+', '*', '-'];
    const symbol = arrSym[randomNum(0, 2)];
    const userAnswer = readlineSync.question(`Question: ${x} ${symbol} ${y} \n`);
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
    const bool = getCondition(result, userAnswer, name, counter);
    if (bool === 'false') {
      break;
    }
  }
}

export default calc;
