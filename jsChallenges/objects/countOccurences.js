function countOccurrences(arr, value) {
  return arr.filter((element) => element === value).length;
}

console.log(countOccurrences([1, 2, 1, 3, 4, 1, 1, 2, 4], 1));
console.log(countOccurrences(['Alex', 'Remi', 'calum', 'Alex'], 'Alex'));
