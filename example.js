#!/usr/bin/env node

'use strict';

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
