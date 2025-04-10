//function expressions = a way to define functions as values or variables
// const hello = function(){
//     console.log("hello");
// }
// hello()

//setTimeout(callback,3000)
// setTimeout(function () {
//   console.log("hello");
// }, 3000);

// const numbers = [1, 2, 3, 4, 5, 6];
// const squares = numbers.map(square);
// console.log(squares);
// function square(element) {
//   return Math.pow(element, 2);
// }

const numbers = [1, 2, 3, 4, 5, 6];
const squares = numbers.map(function (element) {
  return Math.pow(element, 2);
});
console.log(squares);

const cubes = numbers.map(function (element) {
  return Math.pow(element, 3);
});
console.log(cubes);
