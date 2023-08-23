// Exercise 1

// const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

// colors.forEach((color, index) => {
//     console.log(`${index + 1}# choice is ${color} `);
// });

// if (colors.some(color => color === 'Violet')) {
//     console.log('Yeah');
// } else {
//     console.log('No...');
// }


// Exercise 2

// const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
// const ordinal = ["th", "st", "nd", "rd"];

// colors.forEach((color, index) => {
//     const ordinalIndex = (index + 1) <= 3 ? (index + 1) : 0;
//     const ordinalSuffix = ordinal[ordinalIndex];

//     console.log(`${index + 1}${ordinalSuffix} choice is ${color} `);
// });


// Exercise 3

// // ------1------
// const fruits = ["apple", "orange"];
// const vegetables = ["carrot", "potato"];

// const result = ['bread', ...vegetables, 'chicken', ...fruits];
// console.log(result);

// // Answer: ['bread', 'carrot', 'potato', 'chicken', 'apple', 'orange']

// // ------2------
// const country = "USA";
// console.log([...country]);

// // Answer: ['U', 'S', 'A']

// // ------Bonus------
// let newArray = [...[,,]];
// console.log(newArray);

// // Answer: [undefined, undefined]. '[,,]' creates an array with two empty slots at index 0 and index 1.
// // We get the output "undefined, undefined" because the array contains two empty slots, and those slots are logged as undefined


// Exercise 4

// const users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
// { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
// { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
// { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
// { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
// { firstName: 'Wes', lastName: 'Reid', role: 'Instructor' },
// { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor' }];

// const welcomeStudents = users.map(user => `Hello ${user.firstName}`);
// console.log(welcomeStudents);

// const FullStackResidents = users.filter(user => user.role === 'Full Stack Resident');
// console.log(FullStackResidents);

// const FullStackResidentsLastNames = users.filter(user => user.role === 'Full Stack Resident').map(user => user.lastName);
// console.log(FullStackResidentsLastNames);


// Exercise 5

// const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

// const singleString = epic.reduce((accumulator, currentValue) => {
//    return accumulator + ' ' + currentValue;
// });

// console.log(singleString);


// Exercise 6

const students = [{ name: "Ray", course: "Computer Science", isPassed: true },
{ name: "Liam", course: "Computer Science", isPassed: false },
{ name: "Jenner", course: "Information Technology", isPassed: true },
{ name: "Marco", course: "Robotics", isPassed: true },
{ name: "Kimberly", course: "Artificial Intelligence", isPassed: false },
{ name: "Jamie", course: "Big Data", isPassed: false }];

const passedStudents = students.filter(student => student.isPassed);
// console.log(passedStudents);

passedStudents.forEach(student => {
    console.log(`Good job ${student.name}, you passed the course in ${student.course}`);
});