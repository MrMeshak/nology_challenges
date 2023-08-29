const parent1 = 'blue';
const parent2 = 'green';

function printEyeColorProbablity(parent1, parent2) {
  console.log(parent1, parent2);
  const parents = [parent1, parent2];

  if (parent1 === parent2) {
    if (parent1 === 'brown') {
      console.log('brown 75%, green 18.75%, blue 6.25%');
      return;
    } else if (parent1 === 'blue') {
      console.log('brown 0%, green 1%, blue: 99%');
      return;
    } else {
      console.log('brown <1%, green 75%, blue 25%');
    }
  }

  if (parents.includes('green') && parents.includes('brown')) {
    console.log('brown 50%, green 37.5%, blue:12.5%');
    return;
  }

  if (parents.includes('blue') && parents.includes('brown')) {
    console.log('brown 50%, green 0%, blue 50%  ');
    return;
  }
  if (parents.includes('green') && parents.includes('blue')) {
    console.log('brown 0%, green 50%, blue 50%');
    return;
  }

  console.log('no match found');

  return;
}

printEyeColorProbablity(parent1, parent2);
