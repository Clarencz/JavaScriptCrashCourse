// let age = 11;

// if(age >= 18){
//     window.alert("you are old enough to enter")
// }else{
//     window.alert("not old enough...")
// }

// let time = 9;
//  if (time < 12){
//     console.log("good morning")
//  }else{
//     "goood afternoon"
//  }

//  let time = 0;
//  if (time){
//     console.log("good morning")
//  }else{
//     window.alert("goood afternoon")
//  }

// == check if two values are equal

const myText = document.getElementById("myText");
const mySubmit = document.getElementById("mySubmit");
const resultElement = document.getElementById("resultElement");
let age;

mySubmit.addEventListener("click", function () {
  age = myText.value;
  age = Number(age);

  if (age >= 100) {
    resultElement.textContent = "you are too old enough to enter";
  } else if (age == 0) {
    resultElement.textContent = "you are young enough not to enter";
  } else if (age >= 18) {
    resultElement.textContent = "you are old enough to enter this site";
  }
});
