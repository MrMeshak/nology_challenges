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

// implement map and filter

function map(arr, cb) {
  let newArr = Array(arr.length);

  for (let i = 0; i < arr.length; i++) {
    newArr[i] = cb(arr[i]);
  }

  return newArr;
}

console.log(map([1, 2, 3, 4, 5], (value) => value * 2));

function filter(arr, func) {
  const filteredArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      filteredArr.push(arr[i]);
    }
  }

  return filteredArr;
}

console.log(filter([1, 2, 3, 4, 5], (value) => value > 3));

console.log();
