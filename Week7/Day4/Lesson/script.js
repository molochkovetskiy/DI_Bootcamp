// FOREACH METHOD

// const myArray = [2, 3, 4, 5, 6];

// const colors = ['red', 'pink', 'purple', 'blue'];

// colors.forEach((element, index) => {
//     console.log(`Element: ${element} at position ${index}`);
// });

// myArray.forEach((element, index, arr) => {
//     arr[index] = arr[index] * 2;
// });

// console.log(myArray);


// Exercise
// const numbers = [10, 11, 12, 15, 20];

// numbers.forEach((number) => {
//     if (number % 2 === 0) {
//         console.log(number);
//     }
// });


// SOME METHOD

// const myArr = [1, 2, 3, 4, 5, 6, 7, 8];

// let output = myArr.some((value) => value % 2 === 0);

// console.log(output);


// Exercise
// const words = ["wow", "hey", "bye"];

// let output = words.some((word) => word.startsWith('h'));

// console.log(output);


// EVERY METHOD

// const myArr = [1, 2, 3, 4, 5, 6, 7, 8];

// const output = myArr.every((value) => value > 0);

// console.log(output);


// MAP METHOD

// const firstArr = [1, 4, 9, 16];

// const secondArr = firstArr.map((value, index, arr) => value * 2);

// console.log(secondArr);


// FILTER METHOD

// const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
// const result = words.filter(word => word.length > 6);

// const numbers = [1, 2, 3, 4, 5, 6];
// const result = numbers.filter(number => number > 2 && number < 6);

// console.log(result);


// REDUCE METHOD

// const arr = [1, 4, 9, 16];

// const sum = arr.reduce((acc, val) => {
//     console.log(`acc: ${acc}`);
//     console.log(`val: ${val}`);
//     console.log(`acc + val: ${acc + val}`);

//     return acc + val;
// })

// console.log(sum);

// let acc = 0;
// arr.forEach((element) => {
//     acc += element;
// })

// console.log(acc);


// Exercise

// let party = [
//     {
//         desert: 'Chocolate Mousse',
//         calories: 30,
//     },
//     {
//         desert: 'Apple Pie',
//         calories: 15,
//     },
//     {
//         desert: 'Croissant',
//         calories: 50,
//     },
//     {
//         desert: 'Strawberry Icecream',
//         calories: 5,
//     },
// ]

// const calories = party.reduce((sum, dessert) => {
//     // if (dessert.desert != 'Apple Pie') {
//     //     return sum + dessert.calories;
//     // }
//     // return sum;

//     return dessert.desert != 'Apple Pie' ? sum + dessert.calories : sum;

// }, 0);

// console.log(calories);


// DESTRUCTURING

// let a, b, rest;

// [a, b] = [10, 20];
// rest = [30, 40, 50];

// console.log(a);
// console.log(b);
// console.log(rest);


// SPREAD OPERATOR

let a = 10;
let b = 20;
let rest = [30, 40, 50];

const iterable = [a, b, ...rest];
console.log(iterable);