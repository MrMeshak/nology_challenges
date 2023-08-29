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

function remainder(a, b) {
  return a % b;
}

function lessThan100(twoPointers, threePointers) {
  const total = twoPointers * 2 + threePointers * 3;
  return total < 100 ? true : false;
}
