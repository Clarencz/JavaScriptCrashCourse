//destructuring - extract values from arrays and objects, then assign them to variables in a convinient way - []= to perform array destructuring, {}= to perform object destructuring

//........swapping the value of two variables........

let a = 1;
let b = 2;
[a, b] = [b, a];
console.log(a);
console.log(b);

//........swap two elements in an array......
const colors = ["red", "green", "blue", "white"];
[colors[0], colors[3]] = [colors[3], colors[0]];
console.log(colors);

//......assign array elements to variables
const colors2 = ["red", "green", "blue", "white", "pink", "purple"];
const [firstColor, secondColor, thirdColor, fourthColor, ...alsoColors] =
  colors2;
console.log(thirdColor);
console.log(alsoColors);

//.....extract values from objects.....
const person1 = {
  firstName: "gianna",
  lastName: "jasmine",
  age: 23,
  job: "actor",
};
const person2 = {
  firstName: "lulu",
  lastName: "webb",
  age: 25,
};
// const { firstName, lastName, age, job } = person1;
// console.log(firstName);
// console.log(lastName);
// console.log(age);
// console.log(job);

const { firstName, lastName, age, job = "unemployed" } = person2;
console.log(firstName);
console.log(lastName);
console.log(age);
console.log(job);

//.....destructuring in function parameter....
function displayPerson({ firstName, lastName, age, job = "unempolyed" }) {
  console.log(`name: ${firstName} ${lastName}`);
  console.log(`age: ${age}`);
  console.log(`job: ${job}`);
}

const person3 = {
  firstName: "gianna",
  lastName: "jasmine",
  age: 23,
  job: "actor",
};
const person4 = {
  firstName: "lulu",
  lastName: "webb",
  age: 25,
};
displayPerson(person2);
