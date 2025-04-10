//inheritance - allows a new class to inherit properties and methods from an existing class(parent --> child)
class Animal {
  alive = true;
  eat() {
    console.log(`this ${this.name} is eating`);
  }
  sleep() {
    console.log(`this ${this.name} is sleeping`);
  }
}
class Rabit extends Animal {
  name = "rabbit";

  run() {
    console.log(`${this.name} is running`);
  }
}
class Fish extends Animal {
  name = "fish";
  swim() {
    console.log(`${this.name} is swimming`);
  }
}
class Hawk extends Animal {
  name = " Hawk";
  fly() {
    console.log(`${this.name} is flying`);
  }
}

const rabbit = new Rabit();
const fish = new Fish();
const hawk = new Hawk();

console.log(rabbit.alive);
rabbit.eat();
fish.swim();
hawk.fly();
