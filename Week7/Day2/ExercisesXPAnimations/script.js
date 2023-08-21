// Exercise 1

// Part I
// setTimeout(() => {
//     alert("Hello World");
// }, 2000);

// Part II
// const container = document.getElementById('container');
// let paragraphCount = 0;

// function addParagraph() {
//     const paragraph = document.createElement("p");
//     paragraph.textContent = "Hello World";
//     container.append(paragraph);

//     paragraphCount ++;

//     if (paragraphCount === 5) {
//         clearInterval(interval);
//     }
// }

// setTimeout(addParagraph, 2000);

// Part III
// const clearButton = document.getElementById("clear");

// let interval = setInterval(addParagraph, 2000);

// clearButton.addEventListener("click", function () {
//     clearInterval(interval);
// });


// Exercise 2
function myMove() {
    const container = document.getElementById('container');
    const animateDiv = document.getElementById("animate");

    let position = 0;
    const intervalSpeed = 1;
    const intervalDuration = 1;

    const interval = setInterval(() => {
        if (position >= container.offsetWidth - animateDiv.offsetWidth) {
            clearInterval(interval);
        } else {
            position += intervalSpeed;
            animateDiv.style.left = position + "px";
        }
    }, intervalDuration);
};