// Function Declaration and Calling

// function greet() {
//     console.log("Welcome to the page");
// }

// greet();

// PARAMETERS
// function greet(username, age) {
//     console.log(`Welcome to the page ${username} your age is ${age}`);
// }

// greet("Vitaly", 20);

// function calculate(x, y, z) {
//     console.log(x + y + z + "a");
// }

// calculate(1, 1, 1);

// FUNCTIONS DEFAULT VALUE
// function greet(username, age = 20) {
//     console.log(`Welcome to the page ${username} your age is ${age}`);
// }

// greet("Vitaly");

// GLOBAL/LOCAL VARIABLES SCOPES
// function userMoreInfo(userName, userAge) {
//     let eyeColor = "blue"; //local variable 
//     console.log(`My name is ${userName} my age is ${userAge} and my eye color is ${eyeColor}`);
// }

// userMoreInfo("Vitaly", 20);

// EXERCISE
// function age(myAge) {
//     console.log(`The age of my mum ${myAge * 2}, the age of my dad is ${myAge * 2 * 1.2}`);
// }

// age(20);

// RETURN
// function calculate(x, y) {
//     let mySum = x + y;
//     // console.log(mySum);
//     return mySum;
// }
// const sum = calculate(1, 2);
// console.log(sum);

// TRY CATCH ERRORS
// function exceptions() {
//     try {
//         console.log("Hello");
//     } catch (e) {
//         console.log(e);
//     } finally {
//         console.log("I will run in any case")
//     }
// }

// exceptions();


// THROW NEW ERROR
// function calc(x, y) {
//     const sum = x + y;
//     try {
//         if (sum > 10) {
//             throw new Error("Youe number was bigger than allowed, shutting won goodbye");
//         } else {
//             console.log(sum);
//         }
//     } catch (e) {
//         console.log(e);
//     }
// }

// calc(11, 2);

// OBJECTS
// const person = {
//     fname: "Daniel",
//     lname: "Robin",
//     eat: function () {
//         console.log(`I love chocolate and my name is ${this.fname}`);
//     },
// };

// // console.log(person.lname);
// person.eat()

