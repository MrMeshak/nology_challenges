function earthDaysToMoonDay(days) {
  const moonOrbitDays = 27.3;
  return days / moonOrbitDays;
}

function circleArea(radius) {
  return Math.PI * radius ** 2;
}

function circlePerimeter(radius) {
  return 2 * Math.PI * radius;
}

function ageInDays(years) {
  return years * 365;
}

function ageInSeconds(years) {
  return years * 60 * 60 * 24 * 365;
}

console.log(age);

function remainder(a, b) {
  return a % b;
}

function totalPoints(twoPoints, threePoints) {
  return twoPoints * 2 + threePoints * 3;
}

function lessThan100(a, b) {
  return a + b < 100 ? true : false;
}

console.log(earthDaysToMoonDay(50));
console.log(circleArea(10));
console.log(circlePerimeter(10));
console.log(ageInDays(32));
console.log(ageInSeconds(32));
console.log(remainder(1, 3));
console.log(lessThan100(22, 15));
