//.reduce() - reduce the elements of an array to a single value
const prices = [15, 30, 10, 25, 15, 20];
const total = prices.reduce(sum);
console.log(`${total}`);
function sum(previous, next) {
  return previous + next;
}
const grades = [75, 80, 70, 85, 65, 70];
const maximum = grades.reduce(getMax);
const minimum = grades.reduce(getMin);
console.log(maximum);
console.log(minimum);

function getMax(accumulator, element) {
  return Math.max(accumulator, element);
}
function getMin(accumulator, element) {
  return Math.min(accumulator, element);
}
