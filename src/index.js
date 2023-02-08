function randomNum(min, max) {
  const x = Math.floor(Math.random() * (max - min + 1) + min);
  return x;
}

function getCondition(correctAnswer, userAnswer, name, counter) {
  let bool = 'true';
  console.log(correctAnswer, userAnswer);
  if (correctAnswer === userAnswer) {
    console.log('Correct!');
  } else {
    bool = 'false';
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. Let's try again, ${name}!`);
  }
  if (counter >= 3) {
    console.log(`Congratulations, ${name}!`);
  }
  return bool;
}

export { randomNum, getCondition };
