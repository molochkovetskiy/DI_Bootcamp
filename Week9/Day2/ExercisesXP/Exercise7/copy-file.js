import { readFile, writeFile } from 'fs';

readFile('source.txt', 'utf8', (err, data) => {
    if (err) {
        return console.log('Error reading source.txt:', err);
    }

    writeFile('destination.txt', data, 'utf8', (err) => {
        if (err) {
            return console.log('Error writing to destination.txt:', err);
        }

        console.log('Content copied from source.txt to destination.txt successfully.');
    });
});