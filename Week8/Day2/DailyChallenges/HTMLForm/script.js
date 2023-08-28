const form = document.getElementById("myForm");
const resultDiv = document.getElementById("result");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const firstName = form.firstName.value;
    const lastName = form.lastName.value;

    const data = {
        name: firstName,
        lastname: lastName
    };

    const jsonData = JSON.stringify(data);
    resultDiv.textContent = jsonData;
});