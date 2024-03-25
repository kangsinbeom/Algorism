const readline = require('readline');
const rl = readline.createInterface({
	 input: process.stdin,
	 output: process.stdout
});

const lastDigitObj = {
    "1": [1],
    "2": [2, 4, 8, 6],
    "3": [3, 9, 7, 1],
    "4": [4, 6],
    "5": [5],
    "6": [6],
    "7": [7, 9, 3, 1],
    "8": [8, 4, 2, 6],
    "9": [9, 1],
    "0": [10]
}
let lastDigit;
let t = -1;
let count = 0;

rl.on('line', (line) => {
    if (t < 0){
        t = parseInt(line); //제일 처음 들어오는 input이 t가 된다.
    } else {
        count++;
        let [int, expo] = line.split(' ').map((el) => Number(el));//input.push(line);
        let lastDigit = carculate(int, expo);
        console.log(lastDigit);
        if (count === t) {
            rl.close();
        }
    }
});

function carculate(int, expo) {
    const remainder = int % 10; //10보다 작은 수로 나옴.
    if (remainder === 0){
        lastDigit = 10;
    } else if (lastDigitObj[remainder].length === 1){
        lastDigit = lastDigitObj[remainder][0];
    } else {
        const length = lastDigitObj[remainder].length; //length of each obj in obj
        let idx; //need idx for lastDigit
        if (expo % length === 0){
            idx = lastDigitObj[remainder].length - 1;
        } else {
            idx = (expo % length) - 1;
        }
        lastDigit = lastDigitObj[remainder][idx];
    }
    return lastDigit;
}
