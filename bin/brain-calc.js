#!/usr/bin/env node
import readlineSync from 'readline-sync';
import * as GameFunctions from '../src/cli.js';
import randomNum from '../src/getRandomNum.js';

let name = GameFunctions.greetings();

const calc = () => {
  console.log('What is the result of the expression?');
  for (let i = 0; i < 3;) {
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
      i += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${result}'. Let's try again, ${name}!`);
      break;
    }
  }
console.log(`Congratulations, ${name}!`);
};

calc();
