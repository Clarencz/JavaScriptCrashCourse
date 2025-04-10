//checked - determines the checked state of an HTML  checkbox or radio button element

const myCheckbox = document.getElementById("myCheckBox");
const visaBtn = document.getElementById("visaBtn");
const masterCardBtn = document.getElementById("masterCardBtn");
const payPalBtn = document.getElementById("payPalBtn");
const mySubmitBtn = document.getElementById("mySubmitBtn");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

mySubmitBtn.addEventListener("click", function () {
  if (myCheckbox.checked) {
    //console.log("you are Subscribed");
    subResult.textContent = "you are Subscribed";
  } else {
    subResult.textContent = "you are not Subscribed!!";
  }
  if (visaBtn.checked) {
    paymentResult.textContent = "you are paying with Visa";
  } else if (masterCardBtn.checked) {
    paymentResult.textContent = "you are paying with masterCard";
  } else if (payPalBtn.checked) {
    paymentResult.textContent = "you are paying with payPal";
  }
});
