#!/usr/bin/env node

'use strict';

// このファイルを修正して、プルリクエストしてください。
const isPrime = num => {
    for(let i = 2, s = Math.sqrt(num); i <= s; i++)
        if(num % i === 0) return false; 
    return num > 1;
}

let argv = process.argv.slice(2)

const result = argv.filter((v) => {
    if(!isPrime(v)) return false
    return true
})

console.log(result)