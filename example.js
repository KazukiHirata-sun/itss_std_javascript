#!/usr/bin/env node

'use strict';

// このファイルを修正して、プルリクエストしてください。
let nums = process.argv.slice(2);
let prime = [];

for (const num of nums) {
    let a = parseInt(num);
    let isprime = true;
    let i =2;
    
    if (a<=1) isprime = false;
    else{
        if (a <= i) ;
        else {
            for(i; i<a ; i++){
                if (a%i === 0){
                    isprime = false;
                    break;
                }
            }
        }
    }
    
    if(isprime) prime.push(a);
}

console.log(prime)