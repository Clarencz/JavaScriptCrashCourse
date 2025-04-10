//forEach - method used to iterate over the elements of an array and apply a specified function(callback) to each element
//array.forEach(callback)
// let number = [1, 2, 3, 4, 5];

// number.forEach(display);
// number.forEach(double);

// function double(element, index, array) {
//   array[index] = element * 2;
//   console.log(array[index]);
// }

// function display(element) {
//   console.log(element);
// }

let fruits = ["apples", "kiwi", "mapple"];

fruits.forEach(upperCase);
fruits.forEach(lowerCase);
fruits.forEach(capitalize);
fruits.forEach(display);

function upperCase(element, index, array) {
  array[index] = element.toUpperCase();
}
function lowerCase(element, index, array) {
  array[index] = element.toLowerCase();
}
function capitalize(element, index, array) {
  array[index] = element.charAt(0).toUpperCase() + element.slice(1);
}
function display(element) {
  console.log(element);
}
