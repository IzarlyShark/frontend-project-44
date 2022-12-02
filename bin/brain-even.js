#!/usr/bin/env node
import readlineSync from 'readline-sync';

const greetings = () => {
  console.log(`Hi ${readlineSync.question('May I have your name? ')} !`);
};
console.log('Welcome to the Brain Games!');
greetings();
