const userInput = 'Hello 1234';

if (typeof userInput === 'number') {
  console.log(userInput ** 2);
} else if (typeof userInput === 'string') {
  console.log(userInput);
} else {
  console.log('invalid input');
}
