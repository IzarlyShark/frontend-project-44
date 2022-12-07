#!/usr/bin/env node

//рандомные числа
function randomNum(min, max) {
  const x = Math.floor(Math.random() * (max - min + 1) + min);
  return x;
}

export default randomNum;
