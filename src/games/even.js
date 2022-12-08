#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { randomNum, inCorrect } from '../index.js';
import greetings from '../cli.js';

function evenGame() {
  const name = greetings();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let counter = 0;
  for (let i = 0; i < 3; i += 1) {
    const x = randomNum(1, 100);
    const isEven = (num) => num % 2 === 0;
    const correctAnswer = isEven(x) ? 'yes' : 'no';
    const userAnswer = readlineSync.question(`Question:${x} \n`);
    if (correctAnswer === userAnswer) {
      console.log('Correct!');
      counter += 1;
    } else {
      inCorrect(userAnswer, correctAnswer, name);
      break;
    }
  }
  if (counter === 3) {
    console.log(`Congratulations, ${name}!`);
  }
}

export default evenGame;
