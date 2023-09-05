const greet = require('./greeting');
const displayColorfulMessage = require('./colorful-message');
const readAndDisplayFileContent = require('./files/read-file');

greet('John');

displayColorfulMessage();

readAndDisplayFileContent('./files/file-data.txt');