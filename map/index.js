//.map() - accepts a callback and applies that function to each element of an array, then return a new array

// const numbers = [1, 2, 3, 4, 5];
// const squares = numbers.map(square);
// const cubes = numbers.map(cube);

// console.log(cubes);
// console.log(squares);
// function square(element) {
//   return Math.pow(element, 2);
// }
// function cube(element) {
//   return Math.pow(element, 3);
// }

// const students = ["john", "james", "kenya", "zaawadi"];
// const studentsUpper = students.map(upperCase);

// console.log(studentsUpper);

// function upperCase(element) {
//   return element.toUpperCase();
// }

const dates = ["2024-1-10", "2025-1-20", "2026-2-20", "2027-1-30"];
let formattedDates = dates.map(formatDates);
console.log(formattedDates);
function formatDates(element) {
  const parts = element.split("-");
  return `${parts[1]}/${parts[2]}/${parts[0]}`;
}
