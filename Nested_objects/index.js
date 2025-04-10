// const person3 = {
//   firstName: "gianna",
//   lastName: "jasmine",
//   age: 23,
//   job: "actor",
//   hobbies: ["karate", "fishing", "ruunning"],
//   address: {
//     street: "1234 looma st.",
//     town: "bikin bottom",
//     country: "water",
//   },
// };

// console.log(person3.address.town);

// for (const property in person3.address) {
//   console.log(person3.address[property]);
// }

class Person {
  constructor(name, age, ...address) {
    this.name = name;
    this.age = age;
    this.address = new Address(...address);
  }
}
class Address {
  constructor(street, city, country) {
    this.street = street;
    this.city = city;
    this.country = country;
  }
}

const person1 = new Person(
  "gutana",
  39,
  "123 kitomo st.",
  "bikini bottom",
  "water"
);
const person2 = new Person("hellen", 45, "126 kitomo st.", "water");
const person3 = new Person("kirinya", 30, "13 kitomo st.", "water");

console.log(person1.address.country);
