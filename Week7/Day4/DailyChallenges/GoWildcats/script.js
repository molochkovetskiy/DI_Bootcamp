const gameInfo = [
    {
        username: "john",
        team: "red",
        score: 5,
        items: ["ball", "book", "pen"]
    },
    {
        username: "becky",
        team: "blue",
        score: 10,
        items: ["tape", "backpack", "pen"]
    },
    {
        username: "susy",
        team: "red",
        score: 55,
        items: ["ball", "eraser", "pen"]
    },
    {
        username: "tyson",
        team: "green",
        score: 1,
        items: ["book", "pen"]
    },
];

// 1.

// const userNames = [];

// gameInfo.forEach(user => {
//     userNames.push(`${user.username}!`);
// });

// console.log(userNames);

// 2.

// const userNames = [];

// gameInfo.forEach(user => {
//     if (user.score > 5) {
//         userNames.push(user.username);
//     }
// });

// console.log(userNames);

// 3.
const totalScore = gameInfo.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.score;
}, 0);

console.log("Total score:", totalScore);