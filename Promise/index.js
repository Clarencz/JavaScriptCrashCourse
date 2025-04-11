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

//"I promise to return a value" - PENDING -> RESOLVED or REJECTED
// new promise((resolve,reject)) => {asynchronous}

// function walkDog(callback) {
//   setTimeout(() => {
//     console.log("walking dog done");
//     callback();
//   }, 1500);
// }
// function cleanKitchen(callback) {
//   setTimeout(() => {
//     console.log("you are done");
//     callback();
//   }, 2500);
// }
// function throwTrash(callback) {
//   setTimeout(() => {
//     console.log("trash taken");
//     callback();
//   }, 500);
// }
// walkDog(() => {
//   cleanKitchen(() => {
//     throwTrash(() => {
//       console.log("you are done kabisa");
//     });
//   });
// });

function walkDog() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dogWalked = true;
      if (dogWalked) {
        resolve("walking dog done");
      } else {
        reject("walking dog not done");
      }
    }, 1500);
  });
}

function cleanKitchen() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const cleanKitchen = true;
      if (cleanKitchen) {
        resolve("you are done");
      } else {
        reject(" not done");
      }
    }, 2500);
  });
}
function throwTrash(callback) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const throwTrash = true;
      if (throwTrash) {
        resolve("trash taken");
      } else {
        reject("trash not takens");
      }
    }, 500);
  });
}
walkDog()
  .then((value) => {
    console.log(value);
    return cleanKitchen();
  })
  .then((value) => {
    console.log(value);
    return throwTrash();
  })
  .then((value) => {
    console.log(value);
    console.log("you are done");
  })
  .catch(console.error(error));
