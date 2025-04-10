//sort - method used to sort elements of an array in place. Sorts elements as strings in lexicographical order, not alphabetical; lexicographic = (alphabet + numbers + symbols) as strings

let fruits = ["kiwi", " apple", " pineapple", "orange", "pumpkin"];

let fruits1 = fruits.sort();
console.log(fruits1);

let numbers = [1, 7, 14, 8, 9, 2, 20, 6, 3, 4, 5];
numbers.sort((a, b) => a - b);
console.log(numbers);

const people = [
  { name: "luke", age: 39, gpa: 3.0 },
  { name: "John", age: 34, gpa: 2.0 },
  { name: "James", age: 32, gpa: 3.6 },
  { name: "Timo", age: 40, gpa: 4.2 },
];
//people.sort((a, b) => a.age - b.age); //for reverse order b.age - a.age
people.sort((a, b) => a.name.localeCompare(b.name));
console.log(people);
