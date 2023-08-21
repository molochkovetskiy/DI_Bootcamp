// 1.
let allBoldItems;

// 2.
function getBoldItems() {
    const paragraph = document.querySelector("p");
    allBoldItems = paragraph.querySelectorAll("strong");
}

// 3.
function highlight() {
    allBoldItems.forEach(function (word) {
        word.style.color = "blue";
    });
}

// 4.
function returnItemsToDefault() {
    allBoldItems.forEach(function (word) {
        word.style.color = "black";
    });
}

// 5.
getBoldItems();

const paragraph = document.querySelector("p");

paragraph.addEventListener("mouseover", function () {
    highlight();
});

paragraph.addEventListener("mouseout", function () {
    returnItemsToDefault();
});