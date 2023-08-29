const apiKey = "hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";
const gifForm = document.getElementById("gifForm");

const deleteAllButton = document.getElementById("deleteAll");
deleteAllButton.addEventListener("click", deleteAllGifs);

gifForm.addEventListener("submit", async function (event) {
    event.preventDefault();

    const category = gifForm.category.value;
    const apiUrl = `https://api.giphy.com/v1/gifs/random?tag=${category}&rating=g&api_key=${apiKey}`;


    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error("Problem with fetch");
        }
        const data = await response.json();
        const gifUrl = data.data["images"]["480w_still"]["url"];

        displayGif(gifUrl);
    } catch (error) {
        console.log("Error", error);
    }
});

function displayGif(url) {
    const gifContainer = document.getElementById("gifContainer");
    const gifElement = document.createElement("div");
    const gifImg = document.createElement("img");
    const deleteButton = document.createElement("button");

    gifImg.src = url;
    gifImg.alt = "Random GIF";

    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", function () {
        deleteGif(gifElement);
    });

    gifElement.appendChild(gifImg);
    gifElement.appendChild(deleteButton);

    gifContainer.appendChild(gifElement);
}

function deleteGif(gifElement) {
    gifElement.remove();
}

function deleteAllGifs() {
    const gifContainer = document.getElementById("gifContainer");
    gifContainer.innerHTML = "";
}