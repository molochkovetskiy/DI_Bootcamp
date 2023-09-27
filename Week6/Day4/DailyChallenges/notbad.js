// const sentence = 'This dinner is not that bad ! You cook well';
// const sentence = 'This movie is not so bad !';
const sentence = 'This dinner is bad !';

const wordNot = sentence.indexOf('not');
const wordBad = sentence.indexOf('bad');

if (wordNot !== -1 && wordBad !== -1 && wordBad > wordNot) {
    const modifiedSentence = sentence.slice(0, wordNot) + 'good' + sentence.slice(wordBad + 3);
    console.log(modifiedSentence);
} else {
    console.log(sentence);
}