// let tool = "Rihanna umbrella";
// // let firstName = tool.slice(0, 3);
// // let lastName = tool.slice(4);

// let firstName = tool.slice(0, tool.indexOf(" "));
// let lastName = tool.slice(tool.indexOf(" ") + 1);
// console.log(`${firstName} ${lastName}`);

const email = "lol@gmail.com";
let userName = email.slice(0, email.indexOf("@"));
let extension = email.slice(email.indexOf("@") + 1);
console.log(`${userName} ${extension}`);
