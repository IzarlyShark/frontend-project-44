import readlineSync from 'readline-sync';

const greetings = () => {
  console.log(`Hi ${readlineSync.question('May I have your name? ')}!`);
};
export default greetings;
