// for (let i = 1; i < 7; i++) {
//     console.log('* '.repeat(i).trim());
// }

for (let i = 1; i < 7; i++) {
    let result = '';
    for (let j = 1; j <= i; j++) {
        result += '* '
    }
    console.log(result.trim());
}