// Exercise

// const fetchButton = document.getElementById("btn");
// fetchButton.addEventListener("click", fetchData);

// function fetchData() {
//     fetch("https://api.chucknorris.io/jokes/random")
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error("Problem with fetch");
//             }
//             return response.json()
//         })
//         .then(data => {
//             const resultsList = document.getElementById("results");
//             resultsList.innerHTML = "";
//             const listItem = document.createElement("li");
//             const jokeText = document.createTextNode(data.value);
//             listItem.appendChild(jokeText);
//             resultsList.appendChild(listItem);
//         })
//         .catch((error) => console.log("Error:", error));
// }


// Async

// async function check() {
//     return 'Hello';
// }

// console.log(check());


// const grade = 70;

// async function check() {
//     if (grade > 65) {
//         return { gift: 'computer' };
//     } else {
//         throw new Error('Not good grade');
//     }
// }

// check()
//     .then(result => console.log('I got a', result['gift']))
//     .catch(error => console.log('Error:', error));