//Callback = is a function that is passed as an argument to another function - used to handle asynchronous operatons: 1.Reading a file 2.Network requests 3.Interacting with databases
// hello(goodBye);

// function hello(callback) {
//   console.log("hello!");
//   callback();
// }
// function wait(){
//     console.log("wait!");
// }
// function leave(){
//     console.log("leave!");
// }

// function goodBye() {
//   console.log("goodBye!");
// }

function sum(callback, x, y) {
  let result = x + y;
  callback(result);
}
function display(result) {
  console.log(`the sum is ${result}`);
}
sum(display, 3, 3);

function displayPage(result) {
  document.getElementById("myH1").textContent = result;
}
sum(displayPage, 3, 4);
