// Exericse 1

// Part I
// const people = ["Greg", "Mary", "Devon", "James"];

// people.shift();
// console.log(people);

// const indexOfJames = people.indexOf("James");
// if (indexOfJames !== -1) {
//     people[indexOfJames] = "Jason";
// }
// console.log(people);

// people.push('Vitaly');
// console.log(people);

// console.log(people.indexOf('Mary'));

// const newPeople = people.splice(1, 2)
// console.log(newPeople);

// console.log(people.indexOf('Foo'));

// const last = people.pop()
// console.log(last);

// Part II
// for (const num in people) {
//     console.log(people[num]);
// }

// for ( const num in people) {
//     console.log(people[num]);
//     if (people[num] === 'Devon') {
//         break;
//     }
// }


// Exercise 2

// const colors = ['green', 'blue', 'black', 'white', 'violet'];
// const suffixes = ['st', 'nd', 'rd', 'th'];

// for (let i = 0; i < colors.length; i++) {
//     let suffixIndex = i;
//     if (suffixIndex >= 3) {
//         suffixIndex = 3;
//     }
//     const suffix = suffixes[suffixIndex];
//     console.log(`My ${i + 1}${suffix} choice is ${colors[i]}`);
// }


// Exercise 3

// do {
//     userNumber = prompt('Enter a number:');
//     if (userNumber === null) {
//         break;
//     }
// }
// while (userNumber < 10);


// Exercise 4

// const building = {
//     numberOfFloors: 4,
//     numberOfAptByFloor: {
//         firstFloor: 3,
//         secondFloor: 4,
//         thirdFloor: 9,
//         fourthFloor: 2,
//     },
//     nameOfTenants: ["Sarah", "Dan", "David"],
//     numberOfRoomsAndRent: {
//         sarah: [3, 990],
//         dan: [4, 1000],
//         david: [1, 500],
//     },
// }


// console.log(building.numberOfFloors);
// console.log('First floor:', building.numberOfAptByFloor.firstFloor);
// console.log('Third floor:', building.numberOfAptByFloor.thirdFloor);

// const secondTenant = building.nameOfTenants[1];
// console.log(`${secondTenant} has ${building.numberOfRoomsAndRent[secondTenant.toLowerCase()][0]} rooms`);

// sarahsRent = building.numberOfRoomsAndRent.sarah[1];
// davidsRent = building.numberOfRoomsAndRent.david[1];
// dansRent = building.numberOfRoomsAndRent.dan[1];
// if (sarahsRent + davidsRent > dansRent) {
//     building.numberOfRoomsAndRent.dan[1] = 1200;
// }

// console.log(building);


// Exercise 5

// const family = {
//     father: 'Jack',
//     mother: 'Liza',
//     son: 'Ben',
//     daughter: 'Emma'
// };

// console.log('Keys:');
// for (const key in family) {
//     console.log(key);
// }

// console.log('Values:');
// for (const key in family) {
//     console.log(family[key]);
// }


//  Exercise 6

// const details = {
//     my: 'name',
//     is: 'Rudolf',
//     the: 'raindeer'
// }

// let result = '';
// for (const key in details) {
//     result += key + ' ';
//     result += details[key] + ' ';
// }

// console.log(result.trim());


// Exercise 7

const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];

let result = '';
for (const name of names.sort()) {
    result += name[0];
}

console.log(result);