//variable scope - where a variable is recognized and accessible(local vs global)
//local
function function1() {
  let x = 1;
  console.log(x);
}
function function2() {
  let x = 2;
  console.log(x);
}
function1();
function2();

//global
// let x = 30;
// function function1() {
//   console.log(x);
// }
// function function2() {
//   console.log(x);
// }
