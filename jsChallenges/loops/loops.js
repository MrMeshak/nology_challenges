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
  if (n % 2 === 0) {
    return (n / 2) * (n + 1);
  } else {
    return ((n - 1) / 2) * (n + 1) + (n + 1) / 2;
  }
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
    if (!/a|e|i|o|u/.test(str[i])) {
      updatedStr += str[i];
    }
  }
  return updatedStr;
}

console.log(removingVowels('calum'));
