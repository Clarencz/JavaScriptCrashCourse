// let userName;
// userName = window.prompt("what is your username");
// console.log(userName)
let userName;
document.getElementById("mySubmit").onclick = function () {
  userName = document.getElementById("myText").value;
  //(.value) - Means go to the HTML element with id="myText" and get the current value inside it.
  document.getElementById("myH1").textContent = `Morning ${userName}`;
};
