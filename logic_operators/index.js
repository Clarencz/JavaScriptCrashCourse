//logic_operators - AND(&&), OR(||), NOT(!)

const temp = 20;
const sunny = false;

if (temp > 0 && temp <= 30) {
  console.log("weather good");
} else {
  console.log("weather awful");
}
if (temp > 0 || temp <= 30) {
  console.log("weather good");
} else {
  console.log("weather awful");
}
if (!sunny) {
  console.log("weather is not good");
} else {
  console.log("weather is not awful");
}
