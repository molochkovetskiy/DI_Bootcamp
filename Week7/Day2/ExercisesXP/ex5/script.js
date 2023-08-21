const myElement = document.querySelector("div");

// myElement.addEventListener("click", function () {
//     const newX = Math.random() * window.innerWidth;
//     myElement.style.left = `${newX}px`;
// });

// myElement.addEventListener("mouseover", function () {
//     const newY = Math.random() * window.innerHeight;
//     myElement.style.top = `${newY}px`;
// });

myElement.addEventListener("mouseout", function () {
    const colors = ["red", "green", "blue", "orange", "purple"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    myElement.style.backgroundColor = randomColor;
});

myElement.addEventListener("dblclick", function () {
    const newSize = Math.floor(Math.random() * 60) + 30;
    myElement.style.width = `${newSize}px`;
    myElement.style.height = `${newSize}px`;
});