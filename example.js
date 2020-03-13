#!/usr/bin/env node

'use strict';

//ユーザが入力できるのは数字のみとする

const primes=[];

for (var arg of process.argv.slice(2)) {
    arg=Number(arg);
    if (arg < 2) continue; 
    else {
        var i;
        var isPrime = 1;
        for (i = 2; i<=Math.sqrt(arg); i++) {
            if (arg%i === 0) {
                isPrime = 0;
                break;
            }
        }
        if (isPrime == 1) primes.push(arg);
    }
}
console.log(primes);