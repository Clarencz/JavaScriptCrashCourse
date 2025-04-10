//Synchronous - executes line by line consecutively in a sequential manner. Code that waits for the previous line to finish before executing the next line.

//Asynchronous - allows multiple operations to be performed concurrently without waiting. Doesn't block the execution flow and allows the program to continue(I/O operations, network requests, fetching data) - Handled with: callbacks, promises, async/await

//Callbacks - a function passed as an argument to another function, to be executed after some operation has
//completed. It's a way to handle asynchronous operations. It's a function that is passed as
//an argument to another function and is executed after some operation has completed.
//Example of callback function: function callbackFunction() {
//    console.log("Callback function executed");
//}
//function mainFunction() {
//    console.log("Main function executed");
//    callbackFunction();
//}
//mainFunction();
//console.log("Outside the main function");
//Output: Main function executed, Callback function executed, Outside the main function
//Callbacks are useful when you need to perform some operation after another operation has completed.
//They are also useful when you need to perform some operation on the result of another operation.

// setTimeout(() => console.log("task 4"), 3000);
// console.log("task1");
// console.log("task2");
// console.log("task3");
// // Output: task1, task2, task3, task4

function func1(callback) {
  setTimeout(() => {
    console.log("task1");
    callback();
  }, 3000);
}
function func2() {
  console.log("task2");
  console.log("task3");
  console.log("task4");
  console.log("task5");
}

func1(func2);
