// Exercise 1 : Find The Numbers Divisible By 23

// function displayNumbersDivisible(divisor) {
//     let num = "";
//     let sum = 0;

//     for (let i = 0; i <= 500; i++) {
//         if (i % divisor === 0) {
//             num += i + " ";
//             sum += i;
//         }
//     }

//     console.log("Outcome:", num);
//     console.log("Sum:", sum);
// }

// displayNumbersDivisible(13);
// displayNumbersDivisible(45);


// Exercise 2 : Shopping List

// const stock = {
//     "banana": 6,
//     "apple": 0,
//     "pear": 12,
//     "orange": 32,
//     "blueberry": 1
// }

// const prices = {
//     "banana": 4,
//     "apple": 2,
//     "pear": 1,
//     "orange": 1.5,
//     "blueberry": 10
// }

// shoppingList = ["banana", "orange", "apple"]

// function myBill(item) {
//     let sum = 0;

//     for (let i = 0; i < shoppingList.length; i++) {
//         if (shoppingList[i] in stock && stock[shoppingList[i]] > 0) {
//             stock[shoppingList[i]] -= 1;
//             sum += prices[shoppingList[i]];
//         }
//     }

//     return sum;
// }

// console.log(myBill());
// console.log(stock);


// Exercise 3 : What’s In My Wallet ?

// function changeEnough(itemPrice, amountOfChange) {
//     let sum = 0;

//     sum += amountOfChange[0] * 0.25 + amountOfChange[1] * 0.1 + amountOfChange[2] * 0.05 + amountOfChange[3] * 0.01
//     if (sum >= itemPrice) {
//         return true;
//     } else {
//         return false;
//     }
// }

// console.log(changeEnough(14.11, [2, 100, 0, 0]));
// console.log(changeEnough(0.75, [0, 0, 20, 5]));


// Exercise 4 : Vacations Costs

function hotelCost() {
    let numberOfNights;

    while (true) {
        const userInput = prompt("How many nights would you like to stay in the hotel?");

        numberOfNights = Number(userInput);

        if (!isNaN(numberOfNights) && numberOfNights > 0) {
            break;
        } else {
            alert("Please enter a valid number of nights");
        }
    }

    const costPerNight = 140;
    const totalCost = numberOfNights * costPerNight;

    return totalCost;
}

function planeRideCost() {
    while (true) {
        destination = prompt("Where would you like to travel?").trim();

        check = Number(destination);

        if (isNaN(check) && destination !== '') {
            break;
        } else {
            alert("Please enter a valid destination");
        }
    }

    destination = destination.toLowerCase();

    switch (destination) {
        case 'london':
            return 183;
        case 'paris':
            return 220;
        default:
            return 300;
    }
}

function rentalCarCost() {
    let numberOfDays;

    while (true) {
        const userInput = prompt("How many days would you like to rent the car?");

        numberOfDays = parseInt(userInput);

        if (!isNaN(numberOfDays) && numberOfDays > 0) {
            break;
        } else {
            alert("Please enter a valid number of days");
        }
    }

    const costPerDay = 40;
    const totalCost = numberOfDays * costPerDay;

    if (numberOfDays > 10) {
        return totalCost * 0.95;
    } else {
        return totalCost;
    }
}

function totalVacationCost() {
    totalCost = hotelCost() + planeRideCost() + rentalCarCost();

    return totalCost;
}

console.log(totalVacationCost());