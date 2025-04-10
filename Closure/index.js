//closure - a function defined inside another function, the inner function has access to the variables and scope of the outer function. Allow for private variables and state maintenance. Used frequently in Js frameworks : React, Vue, Angular

// function outer() {
//   let message = "hello";
//   function inner() {
//     console.log(message);
//   }
//   inner();
// }
// outer();

// function createCounter() {
//   let count = 0;

//   function increment() {
//     count++;
//     console.log(`count increased to ${count}`);
//   }
//   function getCount() {
//     return count;
//   }
//   return { increment, getCount };
// }
// const counter = createCounter();
// counter.increment();
// console.log(`your count is ${counter.getCount()}`);

function createScore() {
  let score = 0;
  function increaseScore(points) {
    score += points;
    console.log(`${points}pts`);
  }
  function decreaseScore(points) {
    score -= points;
    console.log(`${points}`);
  }
  function getScore() {
    return score;
  }
  return { increaseScore, decreaseScore, getScore };
}

const game = createScore();
game.increaseScore(3);
game.decreaseScore(4);
game.increaseScore(7);
console.log(`   your final score is ${game.getScore()}`);
