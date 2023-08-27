// Exercise 1

// const person = {
//     name: 'John Doe',
//     age: 25,
//     location: {
//         country: 'Canada',
//         city: 'Vancouver',
//         coordinates: [49.2827, -123.1207]
//     }
// }

// const { name, location: { country, city, coordinates: [lat, lng] } } = person;

// console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);

// // Answer: I am John Doe from Vancouver, Canada. Latitude(49.2827), Longitude(-123.1207)


// Exercise 2

// function displayStudentInfo(objUser){
//     let { first: firstName, last: lastName } = objUser;
//     return `Your fullname is ${firstName} ${lastName}`
// }

// fullName = displayStudentInfo({first: 'Elie', last:'Schoppik'});
// console.log(fullName);


// Exercise 3

// const users = { user1: 18273, user2: 92833, user3: 90315 };

// usersArray = Object.entries(users);
// // console.log(usersArray);

// for (let i = 0; i < usersArray.length; i++) {
//     usersArray[i][1] *= 2;
// }

// console.log(usersArray);


// Exercise 4

// class Person {
//     constructor(name) {
//         this.name = name;
//     }
// }

// const member = new Person('John');
// console.log(typeof member);

// // Answer: object


// Exercise 5

// Answer: 2


// Exercise 6

// 1. 
// [2] === [2] // false
// {} === {} // false

// Answer: Arrays are reference type, objects are also reference types.
// '===' operator checks whether the two arrays reference the same memory location, not whether their contents are the same.

// 2.
// const object1 = { number: 5 }; 
// const object2 = object1; 
// const object3 = object2; 
// const object4 = { number: 5};

// object1.number = 4;
// console.log(object2.number) // 4
// console.log(object3.number) // 4
// console.log(object4.number) // 5

// Answer: object1, object2, and object3 all reference the same object in memory.
// When you change the value of the number property in object1 to 4 since object1, object2, and object3 all refer
// to the same object, the change is reflected in all three variables. 
// object4 is a completely separate object with its own memory reference


// Exercise 7

class Animal {
    constructor(name, type, color) {
        this.name = name;
        this.type = type;
        this.color = color;
    }
}

class Mamal extends Animal {
    sound(noise) {
        console.log(`${noise}, I'm an ${this.type}, named ${this.name} and I'm ${this.color}`);
    }
}

farmerCow = new Mamal('Jack', 'elephant', 'grey');
farmerCow.sound('Trumpet');