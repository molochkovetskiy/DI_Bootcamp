// 1st Daily Challenge

// function makeAllCaps(wordsArray) {
//     return new Promise((resolve, reject) => {
//         const areAllStrings = wordsArray.every(word => typeof word === 'string');
//         if (areAllStrings) {
//             const uppercasedArray = wordsArray.map(word => word.toUpperCase());
//             resolve(uppercasedArray);
//         } else {
//             reject("Not all elements in the array are strings")
//         }
//     });
// }

// function sortWords(uppercasedArray) {
//     return new Promise((resolve, reject) => {
//         if (uppercasedArray.length > 4) {
//             const sortedArray = uppercasedArray.sort();
//             resolve(sortedArray);
//         } else {
//             reject("Array length is not greater than 4")
//         }
//     });
// }

// makeAllCaps([1, "pear", "banana"])
//     .then((arr) => sortWords(arr))
//     .then((result) => console.log(result))
//     .catch(error => console.log(error));

// makeAllCaps(["apple", "pear", "banana"])
//     .then((arr) => sortWords(arr))
//     .then((result) => console.log(result))
//     .catch(error => console.log(error));

// makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
//     .then((arr) => sortWords(arr))
//     .then((result) => console.log(result))
//     .catch(error => console.log(error));


// 2nd Daily Challenge

const morse = `{
    "0": "-----",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    "a": ".-",
    "b": "-...",
    "c": "-.-.",
    "d": "-..",
    "e": ".",
    "f": "..-.",
    "g": "--.",
    "h": "....",
    "i": "..",
    "j": ".---",
    "k": "-.-",
    "l": ".-..",
    "m": "--",
    "n": "-.",
    "o": "---",
    "p": ".--.",
    "q": "--.-",
    "r": ".-.",
    "s": "...",
    "t": "-",
    "u": "..-",
    "v": "...-",
    "w": ".--",
    "x": "-..-",
    "y": "-.--",
    "z": "--..",
    ".": ".-.-.-",
    ",": "--..--",
    "?": "..--..",
    "!": "-.-.--",
    "-": "-....-",
    "/": "-..-.",
    "@": ".--.-.",
    "(": "-.--.",
    ")": "-.--.-"
  }`

function toJs() {
    return new Promise((resolve, reject) => {
        const morseObject = JSON.parse(morse);
        if (Object.keys(morseObject).length === 0) {
            reject("Morse object is empty");
        } else {
            resolve(morseObject);
        }
    });
}

function toMorse(morseJS) {
    return new Promise((resolve, reject) => {
        const userInput = prompt("Enter a word or a sentence")

        const words = userInput.toLowerCase().split(" ");
        const morseTranslation = [];

        for (const word of words) {
            const morseWord = [];
            for (const char of word) {
                if (morseJS[char]) {
                    morseWord.push(morseJS[char]);
                } else {
                    reject(`Character ${char} doesn't exist in the morse object`);
                }
            }
            morseTranslation.push(morseWord.join(" "));
        }
        resolve(morseTranslation);
    });
}

function joinWords(morseTranslation) {
    console.log(morseTranslation);
    const translationDiv = document.getElementById("translation");
    const output = morseTranslation.join("<br>");
    translationDiv.innerHTML = output;
}

toJs()
    .then(morseObj => {
        return toMorse(morseObj);
    })
    .then(morseTranslation => {
        joinWords(morseTranslation);
    })
    .catch(error => {
        console.error("Error:", error);
    });