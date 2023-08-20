// Exercise 5 : Users

// 2.
const myDiv = document.getElementById("container");
console.log(myDiv);

const uLists = document.querySelectorAll(".list");
const firstUList = uLists[0];
firstUList.children[1].innerText = "Richard";

const secondUList = uLists[1];
secondUList.children[1].remove();

for (let ul of uLists) {
    ul.firstElementChild.innerText = "Vitaly";
}

// 3.
for (let ul of uLists) {
    ul.classList.add("student_list");
}
uLists[0].classList.add("university", "attendance");

// 4.
myDiv.style.backgroundColor = "lightblue";
myDiv.style.padding = "14px";

for (let uList of uLists) {
    for (let li of uList.querySelectorAll("li")) {
        if (li.innerText == "Dan") {
            li.style.display = "none";
        }
    }
}

for (let uList of uLists) {
    for (let li of uList.querySelectorAll("li")) {
        if (li.innerText == "Richard") {
            li.style.border = "2px solid black";
        }
    }
}

const myBody = document.querySelector("body");
myBody.style.fontSize = "34px";