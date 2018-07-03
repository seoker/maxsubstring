const path = require('path');
const calculate = require('./calculate');

const testData = require(path.join(__dirname, process.argv[2]));
console.log('input:');
console.log(testData.input);
console.log('output:');
console.log(calculate(testData.input.string, testData.input.dictionary));