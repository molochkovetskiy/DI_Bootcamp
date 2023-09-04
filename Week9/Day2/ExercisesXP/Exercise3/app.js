const { readFile, writeFile } = require('./fileManager');

const helloFilePath = 'HelloWorld.txt';
const byeFilePath = 'ByeWorld.txt';

readFile(helloFilePath, (err, data) => {
    if (err) {
        return console.log('Error reading Hello World.txt:', err);
    }

    const newContent = 'Writing to the file';

    writeFile(byeFilePath, newContent, (err) => {
        if (err) {
            return console.log('Error writing to Bye World.txt:', err);
        }
        console.log('Content written to ByeWorld.txt successfully.');
    });
});