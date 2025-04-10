"use strict";
//DOM - Document Object Model - object{} represents the page you see in the browser and provides you with an API to interact with it. Web browser constructs the DOM when it loads an HTML document, and structures all the elements in a tree-like representation. Js can access the DOM to dynamically change the content, structure, and style of the web page

//document.getElementById()
// document.title = "My Website";
// document.body.style.backgroundColor = "red";
const username = " mabeya";
const karibumsg = document.getElementById("karibu-msg");
karibumsg.textContent += username === " " ? "Guest" : username;
console.log(document);
console.dir(document);
