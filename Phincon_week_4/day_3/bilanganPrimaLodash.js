const _ = require("lodash")

// let numArray = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]

// function prima(numbers){
//     return _.filter(numbers, (number) => {
//         for (let i = 2; i <= Math.sqrt(number); i++) {
//         if (number % i === 0) return false;
//         }
//         return true;
//     });
// }
// console.log(prima());

let generateNumbers = (maxNum) => {
    let array = [];
    for(let index = 1; index <= maxNum; index++){
        array.push(index);
    }
    return array;
};

let isPrime = (num) => {
    for(let i = 2; i < num; i++){
        if(num % i === 0) return false;
    }
    return num !== 1;
}

function filterPrimeNumber(nums){
    return _.filter(nums, isPrime);
}

module.exports = { filterPrimeNumber, generateNumbers };