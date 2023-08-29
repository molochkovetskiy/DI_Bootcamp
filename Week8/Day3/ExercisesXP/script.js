// Exercise 1

// const apiKey = "hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";
// const apiUrl = `https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=${apiKey}`;

// fetch(apiUrl)
//     .then(response => {
//         if (!response.ok) {
//             throw new Error("Problem with fetch");
//         }
//         return response.json();
//     })
//     .then(data => {
//         console.log(data);
//     })
//     .catch(error => {
//         console.error("Error:", error);
//     });


// Exercise 2

// const apiUrl = `https://api.giphy.com/v1/gifs/search?q=sun&rating=g&api_key=${apiKey}&limit=10&offset=2`;

// fetch(apiUrl)
//     .then(response => {
//         if (!response.ok) {
//             throw new Error("Problem with fetch");
//         }
//         return response.json();
//     })
//     .then(data => {
//         console.log(data);
//     })
//     .catch(error => {
//         console.error("Error:", error);
//     });


// Exercise 3

// async function fetchData() {
//     try {
//         const response = await fetch("https://www.swapi.tech/api/starships/9/");
//         if (!response.ok) {
//             throw new Error("Problem with fetch");
//         }
//         const objectStarWars = await response.json();
//         console.log(objectStarWars.result);
//     } catch (error) {
//         console.log("Error:", error);
//     }
// }

// fetchData();


// Exercise 4

function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}

async function asyncCall() {
    console.log('calling');
    let result = await resolveAfter2Seconds();
    console.log(result);
}

asyncCall();

/* Answer:

calling
resolved

Inside 'asyncCall', the first console.log('calling') is executed.

The await keyword is used with the 'resolveAfter2Seconds()' function, which means the function
execution will pause at this line until the promise resolves

After 2 seconds, the promise from 'resolveAfter2Seconds()' resolves with the string 'resolved',
and the result variable is assigned the resolved value.

The second console.log(result) is executed, and it logs the value 'resolved'.
*/