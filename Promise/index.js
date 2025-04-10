//promises - a result or value that may not be available yet but will be resolved at some point in the futur
//e.g. fetching data from a server, reading a file, etc. It's a way
//to handle asynchronous operations. It's a value that may not be available yet but will be resolved
//at some point in the future. It's a way to handle asynchronous operations.
//Example of promise: function promiseFunction() {
//    return new Promise((resolve, reject) => {
//        // simulate a delay of 2 seconds
//        setTimeout(() => {
//            // resolve the promise with a value
//            resolve("Promise resolved");
//        }, 2000);
//    });
//}
//function mainFunction() {
//    promiseFunction().then((value) => {
//        console.log(value);
//    });
//}
//mainFunction();
//Output: Promise resolved
//Promises are useful when you need to perform some operation after another operation has completed.
//They are also useful when you need to perform some operation on the result of another operation.
