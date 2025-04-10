//this - reference to the object where THIS is used(the object depends on the immediate context)- person.name = this.name
const person1 = {
  name: "luke",
  food: "fish",
  sayHello: function () {
    console.log(`hello I am ${this.name}`);
  },
};

const person2 = {
  name: "mathew",
  food: "bread",
  eat: function () {
    console.log(`hello I am eating ${this.food}`);
  },
};
person1.sayHello();
person2.eat();

//console.log(this);
