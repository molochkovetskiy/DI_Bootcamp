function areAnagrams(firstString, secondString) {
    const cleanedFirst = firstString.replace(/\s+/g, '').toLowerCase().split('').sort();
    const cleanedSecond = secondString.replace(/\s+/g, '').toLowerCase().split('').sort();

    if (cleanedFirst.length !== cleanedSecond.length) {
        return false;
    }

    for (let i=0; i < cleanedFirst.length; i++) {
        if (cleanedFirst[i] != cleanedSecond[i]) {
            return false;
        }
    }

    return true;
}

// result = areAnagrams("Astronomer", "Moon starer");
// result = areAnagrams("School master", "The classroom");
result = areAnagrams("The Morse Code", "Here come dots");
console.log(result);