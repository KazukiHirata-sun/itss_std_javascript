#!/usr/bin/env node

'use strict';

// このファイルを修正して、プルリクエストしてください。
for (const arg of process.argv.slice(2)) {
  if(isPrime(parseInt(arg))) {
    console.log(arg);
  }
}

function isPrime(num) {
  for(let i = 2; i < Math.sqrt(num); i++)
    if(num % i === 0) return false;
  return num > 1;
}
