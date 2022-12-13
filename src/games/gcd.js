#!/usr/bin/env node
import readlineSync from 'readline-sync';
import greetings from '../cli.js';
import { randomNum, inCorrect } from '../index.js';

console.log('brain-gcd \n');

function loop(x, y, n) {
  for (let i = 0; i < n; n -= 1) {
    if (x % n === 0 && y % n === 0) {
      break;
    }
  }
  return n;
}

function nod() {
  const name = greetings();
  console.log('Find the greatest common divisor of given numbers.');
  let counter = 0;
  for (let i = 0; i < 3; i += 1) {
    const x = randomNum(1, 100);
    const y = randomNum(1, 100);
    let n = x > y ? y : x;
    const userAnswer = readlineSync.question(`Question: ${x} ${y} \nYour answer: `);
    n = loop(x, y, n);
    if (userAnswer !== n.toString()) {
      inCorrect(userAnswer, n, name);
      break;
    } else {
      console.log('Correct!');
      counter += 1;
    }
    if (counter === 3) {
      console.log(`Congratulations, ${name}!`);
    }
  }
}

export default nod;
