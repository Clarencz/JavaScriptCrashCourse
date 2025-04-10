const fruits = [
  { name: "apple", color: "red", calories: 85 },
  { name: "orange", color: "orange", calories: 48 },
  { name: "kiwi", color: "black", calories: 165 },
  { name: "banana", color: "yellow", calories: 185 },
  { name: "pineapple", color: "yellow", calories: 285 },
];
console.log(fruits[0].calories);
fruits.push({ name: "grapes", color: "purple", calories: "62" });
//fruits.pop();
//fruits.splice(1, 2);

//fruits.forEach((fruit) => console.log(fruit.calories));

const fruitNames = fruits.map((fruit) => fruit.name);
const fruitCalories = fruits.map((fruit) => fruit.calories);
const fruitColors = fruits.map((fruit) => fruit.color);

const yellowFruits = fruits.filter((fruit) => fruit.color === "yellow");
const lowerCalories = fruits.filter((fruit) => fruit.calories < 100);

const maxFruit = fruits.reduce((max, fruit) =>
  fruit.calories > max.calories ? fruit : max
);
const minFruit = fruits.reduce((min, fruit) =>
  fruit.calories < min.calories ? fruit : min
);
console.log(minFruit);
