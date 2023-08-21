const form = document.getElementById("MyForm");
const radiusInput = document.getElementById("radius");
const volumeInput = document.getElementById("volume");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const radius = parseFloat(radiusInput.value);
    if (!isNaN(radius)) {
        const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
        volumeInput.value = volume.toFixed(2);
    } else {
        volumeInput.value = "";
    }
});