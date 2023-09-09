const registerForm = document.querySelector('#register');
const registerMessage = document.querySelector('#register-message');

registerForm.addEventListener('submit', (event) => {
    event.preventDefault();
    
    try {
        let fname = document.getElementById("fname").value;
        let lname = document.getElementById("lname").value;
        let email = document.getElementById("email").value;
        let username = document.getElementById("username").value;
        let password = document.getElementById("password").value;
        const userData = {
            fname,
            lname,
            email,
            username,
            password,
        };

        fetch('http://localhost:3000/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        })
            .then((res) => res.json())
            .then((data) => {
                registerMessage.textContent = data.msg;
            })
            .catch((err) => console.log(err));
    } catch(err) {
        console.log(err);
    }
});