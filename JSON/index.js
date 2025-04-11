//JSON - Javascript Object Notation - interchange format used for exchanging data etween a server and a web application. JSON files{key:value} OR [value1,value2,value3]
//JSON.stringify() - converts a js object to a JSON string
//JSON.parse() - converts a JSON string to a JS object

const names = ["luke", "john", "mathew", "Daniel", "moses"];
const person = {
  name: "luke",
  age: 30,
  isEmployed: true,
  hobbies: ["swimming", "karate", "fishing"],
};
const jsonString = JSON.stringify(person);
console.log(jsonString);

const parsedData = JSON.parse(jsonString);
console.log(parsedData);

//fetch()
fetch("people.json")
  .then((response) => response.json())
  .then((value) => value.forEach((value) => console.log(value)));
