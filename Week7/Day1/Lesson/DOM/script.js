// DOM selecting elements

// const myHeader = document.querySelector("h1");
// console.log(myHeader.innerText);
// myHeader.innerText = "WELCOME TO MY PAGE!";

// const myList = document.querySelector("ul");
// console.log(myList.firstElementChild);
// myList.firstElementChild.innerText = "Banana";

// const myP = document.querySelector("#secondP");
// console.log(myP.textContent);

// const myP = document.getElementById("secondP")
// console.log(myP.textContent);

// const myh2 = document.querySelector(".red");
// console.log(myh2);

// const myDiv = document.querySelector("div");
// console.log(myDiv.innerHTML);


// const myDiv = document.querySelector("div");
// const newHeader = document.createElement("h2");
// const headerText = document.createTextNode("This is a new header");

// newHeader.append(headerText);
// newHeader.innerText = "This is a new header";
// myDiv.append(newHeader);

// newHeader.style.backgroundColor = "pink";

// myDiv.remove();


// Attributes
// const header = document.getElementById("firstHeader");

// Check if I have an attribute
// console.log(header.hasAttribute("id"));

// Get Attribute
// console.log(header.getAttribute("id"));

// Set Attribute
// header.setAttribute("style", "color:green");
// header.style.color = "pink";

// header.className = "banana pear apple";
// header.classList.add("pear", "apple");

// console.log(header.className);


// Exercise 2
// const textP = document.getElementById("text");
// textP.style.color = "blue";
// textP.style.fontSize = "30px";
// textP.style.fontFamily = "sans-serif";



// Forms

const forms = document.forms;
// console.log(forms[0]);
// console.log(forms[1]);
// console.log(forms.my);
console.log(forms.yours.elements);