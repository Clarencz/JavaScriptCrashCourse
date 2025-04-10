// No method-chaining
let userName = window.prompt("enter your name:");
// userName = userName.trim();
// let letter = userName.charAt(0);
// letter = letter.toUpperCase();
// let extraLetters = userName.slice(1);
// extraLetters = extraLetters.toLowerCase();
// userName = letter + extraLetters;
// console.log(userName);

//method chaining
userName =
  userName.trim().charAt(0).toUpperCase() +
  userName.trim().slice(1).toLowerCase();
console.log(userName);
