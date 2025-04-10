//...STEP 1 CREATE THE ELEMENT...

//const newH1 = document.createElement("h1");
const newList = document.createElement("li");

//...STEP 2 ADD ATTRIBUTES/PROPERTIES
// newH1.textContent = "Pizza is tamu";
// newH1.id = "myH1";
// newH1.style.color = "tomato";
// newH1.style.textAlign = "center";

newList.textContent = "coconut";
newList.id = "coconut";
newList.style.fontWeight = "bold";
newList.style.backgroundColor = "lightgreen";

//...STEP 3 APPEND ELEMENT TO DOM
//document.body.append(newH1);
//document.body.prepend(newH1);
//document.getElementById("box1").append(newH1);
//document.getElementById("box1").prepend(newH1);

//document.body.append(newList);
//document.getElementById("fruits").append(newList);

// const orange = document.getElementById("orange");
// document.getElementById("fruits").insertBefore(newList, orange);

const box = document.querySelectorAll("#fruits li");
document.getElementById("fruits").insertBefore(newList, box[2]);
//const box2 = document.getElementById("box2");
//document.body.insertBefore(newElement,currentElement)
//document.body.insertBefore(newH1, box2);

// const boxes = document.querySelectorAll(".box");
// document.body.insertBefore(newH1, boxes[2]);

//...REMOVE ELEMENT...
//document.body.removeChild(newH1)
//document.getElementById("box1").removeChild(newH1)
