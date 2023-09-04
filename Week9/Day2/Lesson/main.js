const { usersInfo } = require('./users.js');

// usersInfo().then((data) => console.log(data));

// const info = async () => {
//     const data = await usersInfo();
//     console.log(data);
// };
// info();

(async () => {
    const data = await usersInfo();
    console.log(data);
})();