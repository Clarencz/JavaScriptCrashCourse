//super - keyword is used in classes to call the constructor or access the properties and method of a parent (superclass)- this= this object ; super = the parent

class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  move(speed) {
    console.log(`the ${this.name} moves at  a speed of ${speed}`);
  }
}
class Rabbit extends Animal {
  constructor(name, age, runSpeed) {
    super(name, age);
    this.runSpeed = runSpeed;
  }
  run() {
    console.log(`${this.name} will run`);
    super.move(this.runSpeed);
  }
}
class Fish extends Animal {
  constructor(name, age, swimSpeed) {
    super(name, age);
    this.swimSpeed = swimSpeed;
  }
  swim() {
    console.log(`${this.name} will swim`);
    super.move(this.swimSpeed);
  }
}
class Hawk extends Animal {
  constructor(name, age, flySpeed) {
    super(name, age);
    this.flySpeed = flySpeed;
  }
  fly() {
    console.log(`${this.name} will fly`);
    super.move(this.flySpeed);
  }
}
const rabbit = new Rabbit("rabbit", 1, 25);
const fish = new Fish("fish", 3, 23);
const hawk = new Hawk("hawk", 2, 43);
//console.log(rabbit.name);
rabbit.run();
fish.swim();
hawk.fly();
