#!/usr/bin/env node
import readlineSync, { promptLoop } from 'readline-sync';
import greetings from '../cli.js';
import { randomNum, inCorrect } from '../index.js';

function loop(num) {
  let result = num === 1 ? 'no' : 'yes';
  for (let i = 2; i <= num - 1; i += 1) {
    result = num % i === 0 ? 'no' : 'yes';
    console.log(result, i);
    if (result === 'no') break;
  }
  return result;
}

function getPrime() {
  console.log('brain-prime');
  const name = greetings();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  let counter = 0;
  for (let i = 0; i < 3; i += 1) {
    const num = randomNum(1, 100);
    const userAnswer = readlineSync.question(`Question: ${num} \nYour answer: `);
    const result = loop(num);
    if (userAnswer !== result) {
      inCorrect(userAnswer, result, name);
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
export default getPrime;
