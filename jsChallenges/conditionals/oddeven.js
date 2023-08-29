const n = 5;

if (typeof n === 'number') {
  console.log('invalid n');
} else if (n % 2 === 0) {
  console.log(`${n} is even`);
} else {
  console.log(`${n} is odd`);
}
