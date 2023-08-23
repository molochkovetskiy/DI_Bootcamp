// Exercise 1

// #1
// function funcOne() {
//     let a = 5;
//     if(a > 1) {
//         a = 3;
//     }
//     alert(`inside the funcOne function ${a}`);
// }

// funcOne()

// Alert with value of a: 3
// What will happen if the variable is declared with const instead of let ?
// Answer: TypeError, because we can't reassign constant variable

//#2
// let a = 0;
// function funcTwo() {
//     a = 5;
// }

// function funcThree() {
//     alert(`inside the funcThree function ${a}`);
// }

// funcThree()
// funcTwo()
// funcThree()

// Alert with value of a: 0 and a: 5
// What will happen if the variable is declared with const instead of let ?
// Answer: TypeError, because we can't reassign constant variable

//#3
// function funcFour() {
//     window.a = "hello";
// }


// function funcFive() {
//     alert(`inside the funcFive function ${a}`);
// }

// funcFour()
// funcFive()

// Alert with value of a: "hello"

//#4
// let a = 1;
// function funcSix() {
//     let a = "test";
//     alert(`inside the funcSix function ${a}`);
// }

// funcSix()

// Alert with value of a: "test"
// What will happen if the variable is declared with const instead of let ?
// Answer: nothing will happen, because inside the function there is a declaration
// of a variable and this value will be used

//#5
// let a = 2;
// if (true) {
//     let a = 5;
//     alert(`in the if block ${a}`);
// }
// alert(`outside of the if block ${a}`);

// Alert "in the if block 5"
// Alert "outside of the if block 2"
// What will happen if the variable is declared with const instead of let ?
// Answer: nothing will happen, because inside the function there is a declaration
// of a variable and this value will be used


// Exercise 2

// const winBattle = () => false;

// let experiencePoints;

// experiencePoints = (winBattle()) ? 10 : 1;

// console.log(experiencePoints);


// Exercise 3

// const isString = (value) => typeof (value) === 'string';

// console.log(isString('hello')); 
// console.log(isString([1, 2, 4, 0]));


// Exercise 4

// const sum = (x, y) => x + y;
// console.log(sum(1, 2));


// Exercise 5

// function weightIngrams(weight) {
//     return weight * 1000;
// }
// console.log(weightIngrams(5));

// const weightIngrams = function (weight) {
//     return weight * 1000;
// }
// console.log(weightIngrams(3));

// A function declaration must have a function name. A function expression is similar to a function declaration without the function name

// const weightIngrams = (weight) => weight * 1000;
// console.log(weightIngrams(4));


// Exercise 6

// (function (jobTitle, geographicLocation, partnersName, numberOfChildren) {
//     const p = document.createElement('p');
//     const body = document.querySelector('body');
//     p.textContent = `You will be a ${jobTitle} in ${geographicLocation}, and married to ${partnersName} with ${numberOfChildren} kids.`
//     body.appendChild(p);
// })('programmer', 'Israel', 'Polly', 3);


// Exercise 7

// (function(userName) {
//     const navBar = document.getElementById('navbar')

//     const div = document.createElement('div');
//     div.textContent = `Welcome, ${userName}`;

//     const profilePictureElement = document.createElement('img');
//     profilePictureElement.width = 300;
//     profilePictureElement.src = "https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg";

//     navBar.appendChild(div);
//     navBar.appendChild(profilePictureElement);
// })('Vitaly');


// Exercise 8

// Part I

// function makeJuice(size) {
//     function addIngredients(firstIngredient, secondIngredient, thirdIngredient) {
//         return `The client wants a ${size} juice, containing ${firstIngredient}, ${secondIngredient}, ${thirdIngredient}`
//     }
//     return addIngredients('apple', 'mango', 'ginger');
// }

// console.log(makeJuice('medium'));

// Part II

function makeJuice(size) {
    const ingredients = [];

    function addIngredients(firstIngredient, secondIngredient, thirdIngredient) {
        ingredients.push(firstIngredient, secondIngredient, thirdIngredient);
    }

    function displayJuice() {
        const sentence = `The client wants a ${size} juice, containing ${ingredients.join(', ')}.`;
        
        const p = document.createElement('p');
        p.textContent = sentence;
        document.body.appendChild(p);
    }

    addIngredients('apple', 'mango', 'ginger');
    addIngredients('spinach', 'banana', 'strawberry');
    displayJuice();
}

makeJuice('medium');