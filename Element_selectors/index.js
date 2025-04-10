//1.document.getElementById()        //ELEMENT OR NULL
//document.getElementsByClassName() // HTML COLLECTION
//document.getElementsByTagName()   //HTML COLLECTION
//document.querySelector()         //ELEMENT OR NULL
//document.querySelectoAll()       //NODELIST

//1.
// const myHeading = document.getElementById("my-heading");
// myHeading.style.backgroundColor = "yellow";
// myHeading.style.textAlign = "center";

// console.log(myHeading);

//2.
// const fruits = document.getElementsByClassName("fruits");
//fruits[0].style.backgroundColor = "red";

// for (let fruit of fruits) {
//   fruit.style.backgroundColor = "red";
// }

// Array.from(fruits).forEach((fruit) => {
//   fruit.style.backgroundColor = "red";
// });
// console.log(fruits);

//3.
// const h4Elements = document.getElementsByTagName("h4");
// const liElements = document.getElementsByTagName("li");
// //h4Elements[0].style.backgroundColor = "yellow";

// for (let h4Element of h4Elements) {
//   h4Element.style.backgroundColor = "yellow";
// }
// for (let liElement of liElements) {
//   liElement.style.backgroundColor = "blue";
// }

// Array.from(h4Elements).forEach((h4Element) => {
//   h4Element.style.backgroundColor = "pink";
// });
// console.log(h4Elements);

//4.
// const element = document.querySelector(".fruits");
// element.style.backgroundColor = "green";

//5.
// const fruits = document.querySelectorAll(".fruits");
// fruits[0].style.backgroundColor = "red";

// const foods = document.querySelectorAll("li");
// foods[0].style.backgroundColor = "blue";
// foods.forEach((food) => {
//   food.style.backgroundColor = "indigo";
// });
// console.log(foods);
