const planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];

function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

for (let planet of planets) {
    const listPlanets = document.querySelector(".listPlanets");

    const planetDiv = document.createElement("div");
    planetDiv.className = "planet";
    planetDiv.innerText = planet;
    planetDiv.style.backgroundColor = getRandomColor();

    listPlanets.appendChild(planetDiv);
}