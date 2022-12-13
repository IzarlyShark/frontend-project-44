#!/usr/bin/env node
import readlineSync from 'readline-sync';
import greetings from '../cli.js';
import { randomNum, inCorrect } from '../index.js';

const progressionLenght = 10;

function progression() {
  let numberRange = randomNum(0, 100);
  const progressionStep = randomNum(0, 10);
  const arrProgression = [];

  for (let i = 0; i < progressionLenght; i += 1) {
    arrProgression.push(numberRange);
    numberRange += progressionStep;
  }
  return arrProgression;
}

function getprogression() {
  console.log('brain-progression \n');
  const name = greetings();
  console.log('What number is missing in the progression?');
  let counter = 0;
  for (let i = 0; i < 3; i += 1) {
    const myProgression = progression();
    const randomIndex = randomNum(0, progressionLenght - 1);
    const correctAnswer = myProgression[randomIndex];
    myProgression[randomIndex] = '..';
    const userAnswer = readlineSync.question(`Question:${myProgression} \n`);
    if (correctAnswer === +userAnswer) {
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
export default getprogression;
