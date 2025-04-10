//.firstElementChild
//.lastElementChild
//.nextElementChild
//.previousElementSibling
//.parentElement
//.children

//.......firstElementChild...........
// const element = document.getElementById("fruits");
// const firstChild = element.firstElementChild;
// firstChild.style.backgroundColor = "red";

// const ulElements = document.querySelectorAll("ul");
// ulElements.forEach((ulElement) => {
//   const firstChild = ulElement.firstElementChild;
//   firstChild.style.backgroundColor = "blue";
// });

//...........lastElementChild...........
// const element = document.getElementById("fruits");
// const lastChild = element.lastElementChild;
// lastChild.style.backgroundColor = "red";

// const ulElements = document.querySelectorAll("ul");
// ulElements.forEach((ulElement) => {
//   const lastChild = ulElement.lastElementChild;
//   lastChild.style.backgroundColor = "blue";
// });

//.........nextElementChild...........
// const element = document.getElementById("apple")
// const nextSibling = element.nextElementSibling;
// nextSibling.style.backgroundColor = "yellow"

//.........previousElementSibling.........
// const element = document.getElementById("banana");
// const previousSibling = element.previousElementSibling;
// previousSibling.style.backgroundColor = "yellow";

//...........parentElement..............
// const element = document.getElementById("banana");
// const parent = element.parentElement;
// parent.style.backgroundColor = "yellow";

//...........children.................
const element = document.getElementById("Vegs");
const children = element.children;
Array.from(children).forEach((child) => {
  child.style.backgroundColor = "blue";
});
