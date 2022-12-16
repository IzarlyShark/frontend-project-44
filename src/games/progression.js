#!/usr/bin/env node
import readlineSync from 'readline-sync';
import greetings from '../cli.js';
import { randomNum, getCondition } from '../index.js';

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

const name = greetings();
const rule = 'What number is missing in the progression?';

function getprogression() {
  console.log('brain-progression \n');
  console.log(rule);
  let counter = 0;
  for (let i = 0; i < 3; i += 1) {
    const myProgression = progression();
    const randomIndex = randomNum(0, progressionLenght - 1);
    const correctAnswer = myProgression[randomIndex];
    myProgression[randomIndex] = '..';
    const quest = `Question:${myProgression} \n`;
    const userAnswer = readlineSync.question(quest);
    counter += 1;
    const bool = getCondition(correctAnswer, +userAnswer, name, counter);
    if (bool === 'false') {
      break;
    }
  }
}

export default getprogression;
