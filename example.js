#!/usr/bin/env node

'use strict';

// このファイルを修正して、プルリクエストしてください。
const isPrime = num => {
  for(let i = 2, s = Math.sqrt(num); i <= s; i++)
      if(num % i === 0) return false 
  return num > 1
}

const arr = [...process.argv.slice(2)]
let result = []

result = arr.filter(element => isPrime(element))

console.log(result)
