//eventListener - listen for specific events to create interactive webpages. Events: click, mouseover,mouseout, .addEventListener(event, callback)

// const myBox = document.getElementById("myBox");
// const myButton = document.getElementById("myButton");

// function changeColor(event) {
//   event.target.style.backgroundColor = "yellow";
//   event.target.textContent = "Ouch!!😂";
// }

// myBox.addEventListener("click", (event) => {
//   event.target.style.backgroundColor = "yellow";
//   event.target.textContent = "Ouch!!😒";
// });

// myBox.addEventListener("mouseover", (event) => {
//   event.target.style.backgroundColor = "red";
//   event.target.textContent = "feeling touched😂";
// });
// myBox.addEventListener("mouseout", (event) => {
//   event.target.style.backgroundColor = "aqua";
//   event.target.textContent = "Click Me👍";
// });

// myButton.addEventListener("click", () => {
//   myBox.style.backgroundColor = "yellow";
//   myBox.textContent = "Ouch!!😒";
// });

// myButton.addEventListener("mouseover", function (myBox) {
//   myBox.style.backgroundColor = "red";
//   myBox.textContent = "feeling touched😂";
// });
// myButton.addEventListener("mouseout", () => {
//   myBox.style.backgroundColor = "aqua";
//   myBox.textContent = "Click Me👍";
// });

const myBox = document.getElementById("myBox");
const moveAmount = 10;
let x = 0;
let y = 0;

document.addEventListener("keydown", () => {
  myBox.textContent = "😂";
  myBox.style.backgroundColor = "blue";
});
document.addEventListener("keyup", (event) => {
  myBox.textContent = "💕";
  myBox.style.backgroundColor = "red";
});

document.addEventListener("keydown", (event) => {
  if (event.key.startsWith("Arrow")) {
    event.preventDefault();
    switch (event.key) {
      case "ArrowUp":
        y -= moveAmount;
        break;
      case "ArrowDown":
        y += moveAmount;
        break;
      case "ArrowLeft":
        x -= moveAmount;
        break;
      case "ArrowRight":
        x += moveAmount;
        break;
    }
    myBox.style.top = `${y}px`;
    myBox.style.left = `${x}px`;
  }
});

// document.addEventListener("keydown", () => {
//   myBox.textContent = "😂";
//   myBox.style.backgroundColor = "blue";
// });
// document.addEventListener("keyup", (event) => {
//   myBox.textContent = "💕";
//   myBox.style.backgroundColor = "red";
// });

// document.addEventListener("keydown", (event) => {
//   console.log(`key pressed down ${event.key}`);
// });
// document.addEventListener("keyup", (event) => {
//   console.log(`keyup ${event.key}`);
// });
