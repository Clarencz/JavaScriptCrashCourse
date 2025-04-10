const minMum = 1;
const maxMum = 100;
const answer = Math.floor(Math.random() * (maxMum - minMum + 1) + minMum);
console.log(answer);

let attempts = 0;
let guess;
let running = true;

while (running) {
  guess = window.prompt(`guess a number between ${minMum} and ${maxMum}`);
  guess = Number(guess);
  if (isNaN(guess)) {
    window.alert("enter a valid number");
  } else if (guess < minMum || guess > maxMum) {
    window.alert("enter a valid number");
  } else {
    attempts++;
    if (guess < answer) {
      window.alert("guess less than answer");
    } else if (guess > answer) {
      window.alert("guess larger then the answer");
    } else {
      window.alert("you guessed Right");
      running = false;
    }
  }
}
