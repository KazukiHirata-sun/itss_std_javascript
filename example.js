#!/usr/bin/env node

'use strict';

//Mondai 5
let arrNum = process.argv[2].replace("+", "=").split("=");

for (let i = 0; i <= 9; i++) {
  let [firstNum, secondNum, thirdNum] = arrNum.map(num => Number(num.replace(/X/g, i)));

  if (firstNum + secondNum === thirdNum) {
    console.log(i);
    break;
  }

  if (i == 9) console.log("NA");
}

/* Mondai 3
let arrNum = process.argv.slice(2).map(el => Number(el));

isPrime = num => {
  if (num < 2 || !Number.isInteger(num)) return false;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

arrNum = arrNum.filter(el => isPrime(el));
console.log(arrNum);
*/
