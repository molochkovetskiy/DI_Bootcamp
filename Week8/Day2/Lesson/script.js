// const grade = 80;

// const myPromise = new Promise((resolve, reject) => {
//     if (grade > 75) {
//         resolve({ gift: 'Computer' });
//     } else {
//         reject('Low grade');
//     }
// });


// Exercise

function processString(input) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof input === 'string') {
                resolve(input.toUpperCase());
            } else {
                reject(input);
            }
        }, 5000);
    });
}

function repeatStringTwice(str) {
    return `${str} ${str}`;
}

function processInput(input) {
    processString(input)
        .then(result => {
            console.log(repeatStringTwice(result));
        })
        .catch(error => {
            console.log(`'${error}' is not a string`);
        })
        .finally(() => {
            console.log("Congratulations!");
        });
}

processInput("Hello");
processInput(123); 