const fs = require('fs');

function readFile(filePath, callback) {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            return console.log('Error reading the file:', err);
        }
        console.log(data);
    });
}

function writeFile(filePath, content, callback) {
    fs.writeFile(filePath, content, 'utf8', (err) => {
        if (err) {
            return console.log('Error reading the file:', err);
        }
    });
}

module.exports = {
    readFile,
    writeFile,
};