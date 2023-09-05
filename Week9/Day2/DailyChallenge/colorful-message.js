// npm i chalk@4.1.2 

const chalk = require('chalk');

function displayColorfulMessage() {
    const message = chalk.bold.green('This is a colorful message!');
    console.log(message);
}

module.exports = displayColorfulMessage;