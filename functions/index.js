// function happyBirthday(userName, age) {
//   console.log("ha");
//   console.log("pp");
//   console.log("yyy");
//   console.log(`birthday ${userName}`);
//   console.log(`you are ${age}`);
// }

// happyBirthday("jamal", 23);

// function add(x, y) {
//   let result = x + y;
//   return result;
//   //return x + y
// }
// console.log(add(3, 4));

// function isEven(number) {
//   if (number % 2 === 0) {
//     return true;
//   }
// }
// console.log(isEven(12));

function isValidEmail(email) {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(email); // ✅ returns true
}
console.log(isValidEmail("lol@gmail"));
