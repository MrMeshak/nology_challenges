const hobbies = ['badminton', 'programming', 'soccer'];

console.log(hobbies[0]);

const firstHobby = hobbies.shift();

const hobbiesLength = hobbies.length;

hobbies.push('eating');

console.log(hobbies[hobbies.length - 1]);

console.log('My hobbies are: ' + hobbies.join(','));

const groceries = ['apple', 'pear', 'milk', 'bread', 'eggs'];

console.log(groceries.join('|'));
