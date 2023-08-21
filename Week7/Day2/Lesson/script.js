// Event Listeners

// function clicked() {
//     alert("Button was clicked");
// }

// function mouseOver() {
//     console.log("mouseover event fired");
// }

// const button = document.getElementById("clickEvent")


// button.addEventListener("click", clicked)

// button.addEventListener("click", function click() {
//     alert("Button was clicked");
// });


// button.addEventListener("click", () => {
//     button.style.background = "red";
// });

// button.onclick = clicked;

// button.onmouseover = mouseOver;


// Exercise 1

// const table = document.getElementById("sampleTable");
// let row = 2;

// function insertRow() {
//     row ++;

//     const newTr = document.createElement("tr");
//     const td1 = document.createElement("td");
//     const td2 = document.createElement("td");
//     td1.innerText = `Row${row} cell1`;
//     td2.innerText = `Row${row} cell2`;

//     newTr.append(td1, td2);
//     table.append(newTr);
// }


// Exercise 2

// const button = document.getElementById("jsstyle")

// function RespondClick() { 
//     button.style.backgroundColor = "blue";
// } 

// function RespondMouseOver() { 
//     button.style.fontSize = "34px";
// } 

// button.addEventListener("click", RespondClick); 
// button.addEventListener("mouseover", RespondMouseOver);


// Event Propagation

// const parentDiv = document.getElementById("parent");
// const childDiv = document.getElementById("child");
// const infantDiv = document.getElementById("infant");

// parentDiv.style.height = "300px";
// parentDiv.style.border = "1px solid red";
// childDiv.style.height = "200px";
// childDiv.style.border = "1px solid blue";
// infantDiv.style.height = "100px";
// infantDiv.style.border = "1px solid green";

// parentDiv.onclick = () => console.log("parent");
// childDiv.onclick = () => console.log("child");
// infantDiv.onclick = () => console.log("infant");