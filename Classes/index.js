//classes =
//below we use a constructor then we will use class
// function Product(name, price) {
//   this.name = name;
//   this.price = price;

//   this.displayProduct = function () {
//     console.log(`product: ${this.name}`);
//     console.log(`price: ${this.price}`);
//   };
//   this.calculateTotal = function (salesTax) {
//     return this.price + this.price * salesTax;
//   };
// }

// const salesTax = 0.05;
// const product1 = new Product("shirt", 90);
// const product2 = new Product("shoes", 140);

// product1.displayProduct();
// console.log(product1.calculateTotal(salesTax));
// product2.calculateTotal();

//the use of classes
class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  displayProduct() {
    console.log(`product: ${this.name}`);
    console.log(`price: ${this.price}`);
  }
  calculateTotal = function (salesTax) {
    return this.price + this.price * salesTax;
  };
}
const salesTax = 0.05;
const product1 = new Product("shirt", 90);
const product2 = new Product("shoes", 140);

product1.displayProduct();
console.log(product1.calculateTotal(salesTax));
console.log(product2.calculateTotal(salesTax));
