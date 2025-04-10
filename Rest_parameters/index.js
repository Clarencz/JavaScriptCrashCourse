//rest parameters(...rest) - allow a function work with a variable number of arguments by bundling them into an array
// spread - expands an array into seperate elements into an array

// function openFridge(...foods) {
//   console.log(foods);
// }
// function getFood(...foods) {
//   return foods;
// }
// const food1 = "pizza";
// const food2 = "sushi";
// const food3 = "banana";

// //openFridge(food1, food2, food3);
// const foods = getFood(food1, food2, food3);
// console.log(foods);

// function sum(...numbers) {
//   let result = 0;
//   for (let number of numbers) {
//     result += number;
//   }
//   return result;
// }
// const total = sum(1, 2, 3, 4, 5);
// console.log(`your total is ${total}`);

// function getAverage(...numbers) {
//   let result = 0;
//   for (let number of numbers) {
//     result += number;
//   }
//   return result / numbers.length;
// }
// const avg = getAverage(40, 65, 34, 76, 80);
// console.log(avg);

function combinedString(...strings) {
  return strings.join(" ");
}
const fullName = combinedString("mr", "spongebob", "squarepants");
console.log(fullName);
