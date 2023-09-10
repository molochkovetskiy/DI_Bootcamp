const registerForm = document.querySelector('#register');
const registerMessage = document.querySelector('#register-message');

registerForm.addEventListener('submit', (event) => {
    event.preventDefault();
    
    try {
        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;
        const userData = {
            email,
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