//setTimeout(callback, delay)

// function sayHello() {
//   window.alert("Hello");
// }
// setTimeout(sayHello, 3000);

// setTimeout(function sayHello() {
//   window.alert("Hello2");
// }, 5000);

// setTimeout(() => window.alert("helloz3"), 6000);

//clearTimeout(timeoutId) - can cancel a timeout before it triggers
let timeoutId;
function startTimer() {
  startTimer = Date.now();
  timeoutId = setTimeout(() => window.alert("helloz3"), 6000);
}
function stopTimer() {
  const stopped = Date.now();
  clearTimeout(timeoutId);
  console.log(`stopped after ${stopped - startTimer}`);
}
