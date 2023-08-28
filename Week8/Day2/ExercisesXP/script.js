// Exercise 1

// function compareToTen(num) {
//     return new Promise((resolve, reject) => {
//         if (num <= 10) {
//             resolve(`${num} is less than 10`);
//         } else {
//             reject(`${num} is bigger than 10`);
//         }
//     });
// }

// compareToTen(15)
//     .then(result => console.log(result))
//     .catch(error => console.log(error));

// compareToTen(8)
//     .then(result => console.log(result))
//     .catch(error => console.log(error));


// Exercise 2

// function delayedSuccess() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("success");
//         }, 4000);
//     });
// }

// delayedSuccess()
//     .then(result => console.log(result));


// Exercise 3

const resolvedPromise = Promise.resolve(3);
const rejectedPromise = Promise.reject("Boo!");

resolvedPromise
    .then(result => {
        console.log(`Resolved: ${result}`);
    })
    .catch(error => {
        console.log(`Resolved error: ${error}`);
    });

rejectedPromise
    .then(result => {
        console.log(`Rejected: ${result}`);
    })
    .catch(error => {
        console.log(`Rejected error: ${error}`);
    });