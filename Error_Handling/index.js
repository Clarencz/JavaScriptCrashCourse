//Error- an object that is created to represent a problem that occurs during the execution of a program or with user input or established connection
//uncaught type
//reference error
//try {} - encloses code that might be potentially cause an error
//catch {} - catch and handle any thrown Error from try {}
// finally{ }- (optional) - always executes . used mostly for clean up eg. close files,close connections, release resources
// console.log("Hello");
// console.log("tou have finished the program");

// try {
//   console.lag("Hello");
// } catch (error) {
//   console.error(error);
// } finally {
//   console.log("this always runs");
// }
// console.log("you have reached the end");

try {
  const dividend = Number(window.prompt("enter a dividend:"));
  const divisor = Number(window.prompt("enter a divisor"));
  const result = dividend / divisor;
  if (divisor == 0) {
    throw new Error("you can not divide by zero");
  }
  if (isNaN) {
    throw new Error("value must be a number");
  }
  console.log(result);
} catch (error) {
  console.error(error);
} finally {
  console.log("executed");
}
