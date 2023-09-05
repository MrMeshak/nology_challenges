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

// implement map

function map(arr, cb) {
  let newArr = Array(arr.length);

  for (let i = 0; i < arr.length; i++) {
    newArr[i] = cb(arr[i]);
  }

  return newArr;
}

console.log(map([1, 2, 3, 4, 5], (value) => value * 2));

// implement filter

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

// implement reduce
function reduce(arr, func, initialValue = undefined) {
  let accumulator;
  let i;

  if (initialValue) {
    accumulator = initialValue;
    i = 0;
  } else {
    accumulator = arr[0];
    i = 1;
  }

  for (i; i < arr.length; i++) {
    accumulator = func(accumulator, arr[i]);
  }

  return accumulator;
}

// implement join
console.log(reduce([1, 2, 3, 4, 5], (sum, num) => sum + num));

function join(arr, seprator) {
  let str = String(arr[0]);

  for (let i = 1; i < arr.length; i++) {
    str += seprator + String(arr[i]);
  }

  return str;
}

console.log(join(['hello', 'world', 'javascript', 'rust'], '+'));

// implement reverse

function reverse(arr) {
  let i = 0;
  let j = arr.length - 1;
  while (i < j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
    i++;
    j--;
  }

  return arr;
}

console.log(reverse([1, 2, 3, 5, 6, 7]));

//implement findIndex

function findIndex(arr, func) {
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      return i;
    }
  }
  return -1;
}

console.log(findIndex([1, 2, 3, 5, 6, 7], (num) => num === 3));
