//spread operator(...) - allows an iterable such as an array or string to be expanded into a seperate element (it unpacks the element)
let numbers = [1, 2, 3, 4, 5];
console.log(numbers);
let minimum = Math.min(...numbers);
let maximum = Math.min(...numbers);

let userName = "jared kiplimo";
let letters = [...userName].join("-");

console.log(letters);

let fruits = ["apple", "kiwi", "banana", "pear"];
let veg = ["tomatoes", "potatoes", "onions"];
let newFruits = [...fruits, ...veg];
console.log(newFruits);
console.log(fruits);
