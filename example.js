#!/usr/bin/env node

"use strict";

// このファイルを修正して、プルリクエストしてください。
const input = process.argv.slice(2)
var a = [];
var numberIsPrime = number => {
  if (number < 2) {
    return false;
  }

  for (let i = 2; i <= Math.floor(Math.sqrt(number)); i++) {
    if (number % i === 0) return false;
  }
  return true;
};
for(const number of input) {
    const convertedToInt = parseInt(number)
    if(numberIsPrime(convertedToInt) === true) a.push(convertedToInt)
}
console.log(a)


