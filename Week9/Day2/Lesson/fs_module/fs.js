const fs = require('fs');

// console.log('before');
// const data = fs.readFileSync('users.json', 'utf-8');
// console.log(data);
// console.log('after');

// console.log('before');
// fs.readFile('users.json', 'utf-8', (error, data) => {
//     if (error) {
//         return console.log(error);
//     }
//     console.log(data);
// });
// console.log('after');

let arr = [{ username: 'aaa', password: 123456 }];

fs.writeFile('info', JSON.stringify(arr), (error) => {
    if (error) return console.log(error);
});