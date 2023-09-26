const findButton = document.getElementById("find-button");
const infoContainer = document.getElementById("info-container");

findButton.addEventListener("click", async function () {
    infoContainer.innerHTML = "";
    showLoading();

    const apiUrl = getApiUrl();

    try {
        const response = await fetch(apiUrl);
        console.log(response);

        const data = await response.json();
        displayInfo(data);

    } catch (error) {
        console.log("Error", error);
    }
});

function getApiUrl() {
    const randomNumber = Math.floor(Math.random() * (83 - 1 + 1)) + 1;
    const apiUrl = `https://www.swapi.tech/api/people/${randomNumber}`;
    // const apiUrl = `https://www.swapi.tech/api/people/17`;

    return apiUrl;
}

function showLoading() {
    const spinner = document.createElement("p");
    spinner.style.fontSize = "50px";
    spinner.innerHTML = '<i class="fa-solid fa-spinner fa-spin-pulse"></i>';
    const textSpinner = document.createElement("p");
    textSpinner.innerText = "Loading..."

    infoContainer.append(spinner, textSpinner);
}

async function toGetHomeWorld(apiUrl) {
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error("Problem with fetch");
        }
        const data = await response.json();
        const homeWorld = data.result.properties.name;

        return homeWorld;

    } catch (error) {
        console.log("Error", error);
    }
}

async function displayInfo(data) {
    
    
    if (data.message === "ok") {
        const name = document.createElement("h1");
        name.innerText = data.result.properties.name;

        const height = document.createElement("p");
        height.innerText = `Height: ${data.result.properties.height}`;
        
        const gender = document.createElement("p");
        gender.innerText = `Gender: ${data.result.properties.gender}`;

        const birthYear = document.createElement("p");
        birthYear.innerText = `Birth Year: ${data.result.properties.birth_year}`;
        
        const homeWorld = document.createElement("p");
        homeWorldResponse = await toGetHomeWorld(data.result.properties.homeworld);
        homeWorld.innerText = `Home World: ${homeWorldResponse}`;

        infoContainer.innerHTML = "";
        infoContainer.append(name, height, gender, birthYear, homeWorld);

    } else {
        const message = document.createElement("h1");;
        message.innerText = "Oh No! That person isn't avaliable.";
        infoContainer.innerHTML = "";
        infoContainer.append(message)
    }
}