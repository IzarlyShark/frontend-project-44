#!/usr/bin/env node

function randomNum(min, max) {
  const x = Math.floor(Math.random() * (max - min + 1) + min);
  return x;
}

function inCorrect(answer, trueAnswer, name) {
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${trueAnswer}'. Let's try again, ${name}!`);
}

export { randomNum, inCorrect };
