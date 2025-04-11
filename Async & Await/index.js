//Async - makes a function return a promise.
//Await - makes an async function wait for a promise

//allows you to write asynhronous code in a sychronous manner. Async does not have resolve or reject parameters. Everything after Await is placed in an event queue

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
async function doChores() {
  try {
    const walkDogResult = await walkDog();
    console.log(walkDogResult);
    const cleanKitchenResult = await cleanKitchen();
    console.log(cleanKitchenResult);
    const throwTrashResult = await throwTrash();
    console.log(throwTrashResult);
    console.log("you are done with all");
  } catch (error) {
    console.log(error);
  }
}
doChores();

// walkDog()
//   .then((value) => {
//     console.log(value);
//     return cleanKitchen();
//   })
//   .then((value) => {
//     console.log(value);
//     return throwTrash();
//   })
//   .then((value) => {
//     console.log(value);
//     console.log("you are done");
//   })
//   .catch(console.error(error));
