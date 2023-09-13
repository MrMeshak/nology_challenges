function delayedIncDec(n, mode, timeout = 2500) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof n !== 'number') {
        reject(new Error('n must be of type number'));
      }

      if (mode !== 'inc' && mode !== 'dec') {
        reject(new Error('mode must be either inc or dec'));
      }

      if (mode === 'inc') {
        resolve(n++);
      }

      if (mode === 'dec') {
        resolve(n--);
      }

      return reject(new Error('Something went wrong'));
    }, timeout);
  });
}

delayedIncDec(1, 'inc')
  .then((n) => console.log(n))
  .catch((error) => console.log(error.message));
delayedIncDec(5, 'dec', 5000)
  .then((n) => console.log(n))
  .catch((error) => console.log(error.message));

function delayedFilter(array, callback, timeout) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(array)) {
      reject(new Error('Array must be of type array'));
    }

    if (typeof callback !== 'function') {
      reject(new Error('Callback must be a function'));
    }

    let filteredArr;
    setTimeout(() => {
      filteredArr = array.filter((value) => callback(value));
      resolve(filteredArr);
    }, timeout);
  });
}

delayedFilter([1, 2, 3, 4, 6, 7, 8, 9, 10], (value) => value % 2, 2000)
  .then((filteredArr) => console.log(filteredArr))
  .catch((error) => console.log(error.message));
