// Advanced object methods

// const object1 = {
//     a: 'somestring',
//     b: 42,
//     c: false
// };

// Get keys
// console.log(Object.keys(object1));
// // Get values
// console.log(Object.values(object1));
// // Get key value pairs
// const newArray = Object.entries(object1);
// console.log(newArray);

// // Array to Object
// console.log(Object.fromEntries(newArray));


// Exercise

// let myObj = {
//     name: "John",
//     lastName: "Doe",
//     age: 25,
//     friends: ["Mark", "Lucie", "Ana"]
// }

// const newArr = Object.entries(myObj);
// console.log(`The object has ${newArr.length} keys and values`);

// newArr.forEach((element, index) => {
//     console.log(`The x${index + 1} key is: ${element[0]}. The x${index + 1} value is: ${element[1]}`);
// });


// Object Destructuring

// const address = {
//     street: 'Evergreen Terrace',
//     number: '742',
//     city: 'Springfield',
//     state: 'NT',
//     zip: '49007',
// };

// Custom variables names
// const { street: s, city: c } = address;

// console.log(s);
// console.log(c);

// const { street, city } = address;

// console.log(street);
// console.log(city);


// Nested Object Destructuring

// const student = {
//     name: 'John Doe',
//     age: 16,
//     scores: {
//         maths: 74,
//         english: 63
//     }
// };

// const { name, scores: { maths, science = 50 } } = student;

// console.log(`${name} scored ${maths} in Maths and ${science} in English`);


// Spreading

// let obj = { foo: 1, bar: 2 };
// let newObj = { ...obj, baz: 3 };

// console.log(newObj);

// let obj = {foo: 1, bar: 2, baz: 3};
// let newObj = {...obj, foo: true}
// console.log(newObj)


// Classes

// class Rectangele {
//     constructor(height, width) {
//         this.height = height;
//         this.width = width;
//     }

//     calcArea() {
//         return this.height * this.width;
//     }
// }

// const square = new Rectangele(7, 5);
// console.log(square.calcArea());

// const biggerSquare = new Rectangele(15, 15);
// console.log(biggerSquare.calcArea());


// Exercise

// class Rabbit {
//     constructor(type) {
//         this.type = type;
//     }
//     speak(line) {
//         console.log(`The ${this.type} rabbit says '${line}'`);
//     }
// }

// let killerRabbit = new Rabbit("killer");
// let blackRabbit = new Rabbit("black");

// killerRabbit.speak("I kill you!");
// blackRabbit.speak("Hello");


// Getters And Setters

// class Rectangle {
//     constructor(height, width) {
//         this.height = height;
//         this.width = width;
//     }

//     get area() {
//         return this.height * this.width;
//     }

//     set area(factor) {
//         this.width = this.height * factor;
//     }
// }

// const square = new Rectangle(10, 10);
// console.log(square.area);
// square.area = 2;
// console.log(square.area);


// Extending classes

// class Animal {
//     constructor(name) {
//         this.name = name;
//     }

//     speak() {
//         console.log(`${this.name} makes a noise.`);
//     }
// }

// class Dog extends Animal {
//     constructor(name, noise) {
//         super(name);
//         this.noise = noise;
//     }

//     speak() {
//         console.log(`${this.name} barks.It says ${this.noise}`);
//     }
// }


// let newDog = new Dog('Mitzie', "Woof");
// newDog.speak();

// console.log(newDog);