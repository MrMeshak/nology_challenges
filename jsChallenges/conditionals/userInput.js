const userInput = 'Hello 1234';

if (!Number.isNaN(Number(userInput))) {
  console.log(userInput ** 2);
} else if (typeof userInput === 'string') {
  console.log(userInput);
} else {
  console.log('invalid input');
}
