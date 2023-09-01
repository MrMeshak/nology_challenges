const n = 100;

function sum(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

console.log(sum(9));

//__________________

function sumBonus(n) {
  return (n / 2) * (n + 1);
}

console.log(sumBonus(9));

//__________________

const shoppingList = ['milk', 'watermelon', 'eggs', 'soap', 'butter', 'apples', 'ice-cream'];

function printList(list) {
  for (let i = 0; i < list.length; i++) {
    console.log(`${i}. ${list[i]}`);
  }
}

printList(shoppingList);

//__________________

function shiftChar(c) {
  if (c === 'z') {
    return 'a';
  }
  if (c === 'Z') {
    return 'A';
  }
  if (/[a-z]|[A-Z]/.test(c)) {
    return String.fromCharCode(c.charCodeAt(0) + 1);
  }
  return c;
}
//___________________

function capitalizeOddLetters(str) {
  let updatedStr = '';
  for (let i = 0; i < str.length; i++) {
    if (i % 2 === 0) {
      updatedStr += str[i];
    } else {
      updatedStr += str[i].toUpperCase();
    }
  }
  return updatedStr;
}

console.log(capitalizeOddLetters('this is a string'));

//___________________

function encryptString(str) {
  let encryptedStr = '';
  for (let i = 0; i < str.length; i++) {
    encryptedStr += shiftChar(str[i]);
  }

  return encryptedStr;
}

console.log(encryptString('hello!'));

function removingVowels(str) {
  let updatedStr = '';
  for (let i = 0; i < str.length; i++) {
    if (!/a|e|i|o|u|A|I|E|O|U/.test(str[i])) {
      updatedStr += str[i];
    }
  }
  return updatedStr;
}

console.log(removingVowels('calum'));

//___________________

// return a random int min <= n < max

function generateRandomNum(max) {
  return Math.random() * max;
}

function generateRandomNumbers1() {
  let numArr = [];

  let i = 0;
  while (i < 10) {
    const num = generateRandomNum(15);
    if (numArr.includes(num)) {
      continue;
    }

    numArr.push(num);
    i++;
  }

  return numArr;
}

function generateRandomInt(max) {
  max = Math.floor(max);
  return Math.floor(Math.random() * max);
}
console.log(generateRandomNumbers1(10));

function generateRandomNumbers2(n, r, isUnique) {
  let i = 0;
  let numArr = [];

  if (r > n && isUnique) {
    throw error('n must be greater than range if numbers are unique');
  }

  while (i < n) {
    const num = generateRandomInt(r);

    if (isUnique && numArr.includes(num)) {
      continue;
    }

    numArr.push(num);
    i++;
  }

  return numArr;
}

console.log(generateRandomNumbers2(10, 15, true));
