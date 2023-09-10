const loginForm = document.querySelector('#login');
const welcomeMessage = document.querySelector('#welcome-message');

loginForm.addEventListener('submit', (event) => {
    event.preventDefault();

    try {
        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;
        const userData = {
            email,
            password,
        };

        fetch('http://localhost:3000/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        })
            .then((res) => res.json())
            .then((data) => {
                welcomeMessage.textContent = data.msg;
            })
            .catch((err) => console.log(err));
    } catch(err) {
        console.log(err);
    }
});