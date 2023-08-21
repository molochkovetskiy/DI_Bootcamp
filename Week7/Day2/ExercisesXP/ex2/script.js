// 1.
// const formElem = document.querySelector("form");
// console.log(formElem);

// 2.
// const firstName = document.getElementById("fname");
// console.log(firstName);

// const lastName = document.getElementById("lname");
// console.log(lastName);

// 3.
// const firstName = document.getElementsByName("firstname");
// console.log(firstName);

// const lastName = document.getElementsByName("lastname");
// console.log(lastName);

// 4.
const userForm = document.querySelector("form");
const usersAnswerList = document.querySelector(".usersAnswer");

userForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const firstNameInput = document.getElementById("fname");
    const lastNameInput = document.getElementById("lname");

    const firstNameValue = firstNameInput.value.trim();
    const lastNameValue = lastNameInput.value.trim();

    if (firstNameValue !== "" && lastNameValue !== "") {

        const firstNameLi = document.createElement("li");
        const lastNameLi = document.createElement("li");

        firstNameLi.textContent = firstNameValue;
        lastNameLi.textContent = lastNameValue;

        body.appendChild(firstNameLi);
        body.appendChild(lastNameLi);

        firstNameInput.value = '';
        lastNameInput.value = '';
    }
});
