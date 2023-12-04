const fs = require('fs').promises;

async function main() {
    const inputData = await readInputFile() 
    const dataArray = inputData.split('\n');
    const sum = calculateSum(dataArray);
    console.log(sum);
}

async function readInputFile() {
    try {
        const data = await fs.readFile('./input.txt', 'utf-8');
        return data;
    } catch (err) {
        console.error(`Error reading input file: ${err.message}`);
    }
}

function calculateSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        let joinedNumber = '';
        let currentStr = arr[i];
        let reversedStr = arr[i].split('').reverse().join('');
        for (let i = 0; i < currentStr.length; i++) {
            if (/[0-9]/.test(currentStr[i])) {
                joinedNumber += currentStr[i];
                break;
            }
        }
        for (let i = 0; i < reversedStr.length; i++) {
            if (/[0-9]/.test(reversedStr[i])) {
                joinedNumber += reversedStr[i];
                break;
            }
        }
        sum += Number(joinedNumber);
    }
    return sum;
}

main();