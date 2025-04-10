//Arrow_functions - a coincise way to write function expressions . good for simple functions that you use only once(parameters) => code

// function hello() {
//   console.log("hello");
// }
// hello();

// const hello2 = function () {
//   console.log("hello2");
// };
// hello2();

// const hello3 = () => console.log("hello3");
// hello3();

// const hello4 = (name) => console.log(`hello4 ${name}`);
// hello4("jamal");

// setTimeout(hello5, 3000);
// function hello5() {
//   console.log("hello5");
// }

// setTimeout(function () {
//   console.log("hello6");
// }, 3000);

// setTimeout(() => console.log("hello7"), 3000);

const number = [1, 2, 3, 4, 5, 6, 7, 8];
const squares = number.map((element) => Math.pow(element, 2));
const evenNums = number.filter((element) => element % 2 === 0);
