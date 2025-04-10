// let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
// let evenNums = numbers.filter(isEven);
// let oddNums = numbers.filter(isOdd);

// console.log(evenNums);
// console.log(oddNums);

// function isEven(element) {
//   return element % 2 === 0;
// }
// function isOdd(element) {
//   return element % 2 === 1;
// }

const ages = [16, 17, 18, 18, 23, 12, 14];
// const adults = ages.filter(isAdult);
// const children = ages.filter(isChild);
// console.log(adults);
// function isAdult(element) {
//   return element >= 18;
// }
// console.log(children);
// function isChild(element) {
//   return element <= 18;
// }

const children = ages.filter(function (element) {
  return element <= 18;
});
