#!/usr/bin/env node
import readlineSync from 'readline-sync';
import greetings from '../cli.js';
import { randomNum, inCorrect } from '../index.js';

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
    if (userAnswer === result.toString()) {
      console.log('Correct!');
      counter += 1;
    } else {
      inCorrect(userAnswer, result, name);
      break;
    }
  }
  if (counter === 3) {
    console.log(`Congratulations, ${name}!`);
  }
}

export default calc;
