// 1.
const h1Elem = document.querySelector("h1");
console.log(h1Elem.textContent);

// 2.
const article = document.querySelector("article");
const paragraphs = article.querySelectorAll("p");

const lastParagraph = paragraphs[paragraphs.length - 1];
article.removeChild(lastParagraph);

// 3.
const h2Elem = document.querySelector("h2");
h2Elem.addEventListener("click", function () {
    h2Elem.style.backgroundColor = "red";
});

// 4.
const h3Elem = document.querySelector("h3");
h3Elem.addEventListener("click", function () {
    h3Elem.style.display = "none";
});

// 5.
const boldButton = document.getElementById("boldButton");
boldButton.addEventListener("click", function () {
    paragraphs.forEach(function (paragraph) {
        paragraph.style.fontWeight = "bold"
    });
});

// 6.
h1Elem.addEventListener("mouseover", function () {
    h1Elem.style.fontSize = Math.floor(Math.random() * 101) + "px";
});

// 7.
const secondParagraph = paragraphs[1];
secondParagraph.addEventListener("mouseover", function () {
    secondParagraph.classList.add("fade-out");
});