#!/usr/bin/env node

'use strict';

// このファイルを修正して、プルリクエストしてください。
const input = process.argv.slice(2);
var res = [];
var isPrime = (i) => {
    if (i === 2) {
        return true;
    }
    if (i < 2 || i % 2 === 0) {
        return false;
    }
    for (let m = 3; m <= Math.floor(Math.sqrt(i)); m += 2) {
        if (i % m == 0) {
            return false;
        }
    }
    return true;
}
for (const value of input) {
    let i = parseInt(value);
    if (isPrime(i) === true) {
        res.push(i);
    }
}
console.log(res);
