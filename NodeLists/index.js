//NodeLists - static collection of HTML elements by (id, class, element). Can be created by using querySelectorAll(). Similar to an array, but no (map,filter,reduce). Nodelist won't update to automatically reflect changes

let buttons = document.querySelectorAll(".myButtons");
console.log(buttons);

// buttons.forEach((button) => {
//   button.style.backgroundColor = "aqua";
//   button.textContent += "🎶🎶";
// });

// buttons.forEach((button) => {
//   button.addEventListener("click", (event) => {
//     event.target.style.backgroundColor = "tomato";
//   });
// });

// buttons.forEach((button) => {
//   button.addEventListener("mouseover", (event) => {
//     event.target.style.backgroundColor = "tomato";
//   });
// });
// buttons.forEach((button) => {
//   button.addEventListener("mouseout", (event) => {
//     event.target.style.backgroundColor = "aqua";
//   });
// });

//ADD AN ELEMENT
const newButton = document.createElement.apply("button");
//STEP ADD ATTRIBUTES
newButton.textContent = "Button 5";
newButton.classList = "myButtons";
//STEP 3
document.body.appendChild(newButton);
buttons = document.querySelectorAll(".myButtons");

//REMOVE AN ELEMENT
buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.target.remove();
    buttons = document.querySelectorAll(".myButtons");
  });
});
