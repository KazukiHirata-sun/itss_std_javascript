#!/usr/bin/env node

'use strict';
let arr = []
for(let i = 2; i < process.argv.length; i++){
  arr.push(process.argv[i])
}

const isPrime = num => {
  for(let i = 2; i <= Math.sqrt(num); i++)
    if(num % i === 0) return false;
  return num > 1;
}

let primes = []
for( let i = 0; i< arr.length; i ++){
  if(isPrime(arr[i])) {
    primes.push(arr[i])
  }
}
console.log(primes)