// objects - a collection of related properties and/or methods, can represent real world objects(people, products, places)  object = {key:value,function()}}

const person1 = {
  firstName: "john",
  lastName: "kidogo",
  age: 10,
  isEmployed: false,
  sayHello: function () {
    console.log("hi i am john");
  },
  sayBye: function () {
    console.log("goodBye");
  },
};
const person2 = {
  firstName: "jamal",
  lastName: "jomvu",
  age: 20,
  isEmployed: true,
  sayHello: () => console.log("hi i am jamal"),
  sayBye: () => console.log("bye..."),
};

console.log(person1.firstName);
console.log(person1.age);
console.log(person2.lastName);
person2.sayBye();
