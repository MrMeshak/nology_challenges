function modifyWords(str, cb) {
  const strArr = str.split(' ');
  updatedStrArr = strArr.map(cb);

  return updatedStrArr.join(' ');
}

function capitaliseWord(str) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

function reverseWord(str) {
  return str.split('').reverse().join('');
}

function upperCaseWord(str) {
  return str.toUpperCase();
}

console.log(modifyWords('hello world', capitaliseWord));
console.log(modifyWords('hello world', reverseWord));
console.log(modifyWords('hello world', upperCaseWord));
