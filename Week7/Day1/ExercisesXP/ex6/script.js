// Exercise 6 : Change The Navbar

// 2.
const navBar = document.getElementById("navBar");
navBar.setAttribute("id", "socialNetworkNavigation");

// 3.
newLi = document.createElement("li");
textNode = document.createTextNode("Logout");
newLi.append(textNode);

listUl = navBar.querySelector("ul");
listUl.appendChild(newLi);

// 4.
console.log(listUl.firstElementChild.textContent);
console.log(listUl.lastElementChild.textContent);