const n = 5;

if (Number.isNaN(Number(n))) {
  console.log('invalid n');
} else if (n % 2 === 0) {
  console.log(`${n} is even`);
} else {
  console.log(`${n} is odd`);
}
