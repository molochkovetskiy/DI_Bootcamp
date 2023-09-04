import persons from "./data.js";

function calculateAverageAge(persons) {
    const totalAge = persons.reduce((sum, person) => sum + person.age, 0);
    const averageAge = totalAge / persons.length;
    return averageAge;
}

const averageAge = calculateAverageAge(persons);
console.log(`The average age of all persons is: ${averageAge}`);