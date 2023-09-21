const jwt = require('jsonwebtoken');

// Create a JWT - jwt.sign( payload, secret-code, expire-time)

// const token = jwt.sign(
//     {
//         email: 'aaa@gmail.com',
//         username: 'aaa',
//         userid: 123456,
//     },
//     '1234#56@',
//     {
//         expiresIn: '1d',
//     }
// );

// console.log(token);

const oldtoken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFhYUBnbWFpbC5jb20iLCJ1c2VybmFtZSI6ImFhYSIsInVzZXJpZCI6MTIzNDU2LCJpYXQiOjE2OTUxOTM2MTYsImV4cCI6MTY5NTI4MDAxNn0.x5eEz7yxJteDVVVDMI79uJfcJKanQA5SwOyJtUcIO90';

// Verify - jwt.verify( token, secret, (err, decode)=>{})

jwt.verify(oldtoken, '1234#56@', (err, decode) => {
    if (err) return console.log(err);
    console.log(decode);
});