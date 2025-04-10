// let userName = "";
// while (userName === "") {
//   userName = window.prompt("enter you userName:");
// }
// console.log(`hello ${userName}`);

// let userName = "";
// while (userName === "" || userName === null) {
//   userName = window.prompt("enter you userName:");
// }
// console.log(`hello ${userName}`);

//do...while
// let userName;
// do {
//   userName = window.prompt("enter you userName:");
// } while (userName === "" || userName === null);
// console.log(`hello ${userName}`);

let loggedIn = false;
let userName;
let password;

// while (!loggedIn) {
//   userName = window.prompt("Enter userName:");
//   password = window.prompt("Enter your Password");

//   if (userName === "myUserName" && password === "myPassword") {
//     loggedIn = true;
//     console.log("you are logged In");
//   } else {
//     console.log("Invalid Details Try Again");
//   }
// }
do {
  userName = window.prompt("Enter userName:");
  password = window.prompt("Enter your Password");

  if (userName === "myUserName" && password === "myPassword") {
    loggedIn = true;
    console.log("you are logged In");
  } else {
    console.log("Invalid Details Try Again");
  }
} while (!loggedIn);
