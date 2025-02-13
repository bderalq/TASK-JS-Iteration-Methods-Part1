const numbers = [10, 13, 20, 25, 38, 35, 40];

const greaterThanTwentyFive = (numbers) =>  numbers.filter(n=>n >= 25) ;

const divisibleByFive = (numbers) =>  numbers.filter(n=>n %5 == 0) ;

const squaredNumbers = (numbers) =>  numbers.map(n=>n * n) ;

const doubledNumbers = (numbers) => numbers.map (n=>n * 2);

const filteredAndSquared = (numbers) => numbers.filter(n=>n >= 20).map(n=>n *n );

const filteredAndTripled = (numbers) =>  numbers.filter(n=>n %5 == 0).map(n=>n * 3);

// 🌶️🌶️🌶️ Extra

function logger(array) {
  array.forEach(element => console.log(element));
}

function toCelsius(temperatures) {
  return temperatures.map(temp => (temp - 32) * (5 / 9));
}

function hottestDays(temperatures, threshold) {
  return temperatures.filter(temp => temp > threshold);

}

function logHottestDays(temperatures, threshold) {
}

module.exports = {
  greaterThanTwentyFive,
  divisibleByFive,
  squaredNumbers,
  doubledNumbers,
  filteredAndSquared,
  filteredAndTripled,
  logger,
  toCelsius,
  hottestDays,
  logHottestDays,
};
