let fruits = ["appple", "kiwi", "banana"];

console.log(fruits[0]);
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
for (fruit of fruits) {
  console.log(fruit);
}

console.log(fruits.sort().reverse());
