#!/usr/bin/env node
import readlineSync from 'readline-sync';

let name;

function greetings() {
  console.log('Welcome to the Brain Games!');
  name = readlineSync.question('May I have your name? ');
  console.log(`Hi ${name} !`);
  return name;
}

export default greetings;
