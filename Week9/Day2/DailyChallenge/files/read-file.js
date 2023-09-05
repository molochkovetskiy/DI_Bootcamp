const fs = require('fs');

function readAndDisplayFileContent(filepath) {
    fs.readFile(filepath, 'utf8', (err, data) => {
        if (err) {
            return console.log('Error reading file:', err);
        }
        console.log('File content:');
        console.log(data);
    });
}

module.exports = readAndDisplayFileContent;