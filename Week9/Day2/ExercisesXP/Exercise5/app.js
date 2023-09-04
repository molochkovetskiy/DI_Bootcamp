import lodash from 'lodash';
import { add, multiply } from './math.js';

const numbers = [2, 4, 6, 8, 10];

const sum = lodash.sum(numbers);

// const product = multiply(...numbers);
const product = numbers.reduce((acc, val) => multiply(acc, val));

console.log(`Sum: ${sum}`);
console.log(`Product: ${product}`);