// Exercise 1

const ex1 = [1, 2, 3].map(num => {
    if (typeof num === 'number') return num * 2;
    return;
});

// Answer: The output will be [2, 4, 6]. Beacuse all the values in the array are numbers

// console.log(ex1)


// Exercise 2

const ex2 = [[0, 1], [2, 3]].reduce(
    (acc, cur) => {
        return acc.concat(cur);
    },
    [1, 2],
);

// Answer: The output will be [1, 2, 0, 1, 2, 3]. The function concatenates each subarray
// to the accumulator (acc), starting with the initial value '[1, 2]'

// console.log(ex2);


// Exercise 3

// const arrayNum = [1, 2, 4, 5, 8, 9];
// const newArray = arrayNum.map((num, i) => {
//     console.log(num, i);
//     alert(num);
//     return num * 2;
// })

// Answer: The value of i in this context will be the index of the current element being
// processed in the map() function.
// 1 0
// 2 1
// 4 2
// 5 3
// 8 4
// 9 5


// Exercise 4

// 1.
const array = [[1], [2], [3], [[[4]]], [[[5]]]]
const flattened = array.flat(2);
// console.log(flattened);

// 2.
const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]];
const modifiedGreeting = greeting.map(innerArray => innerArray.join(' '));
// console.log(modifiedGreeting);

// 3.
const modifiedGreeting2 = greeting.map(innerArray => innerArray.join(' ')).join(' ');
// console.log(modifiedGreeting2);

// 4.
const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]];
const extractedNumber = trapped.flat(Infinity);
console.log(extractedNumber);