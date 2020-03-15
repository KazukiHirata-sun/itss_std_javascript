#!/usr/bin/env node

'use strict';
let i, input;
// このファイルを修正して、プルリクエストしてください。
const arr = [...process.argv.slice(2)];
let result = [];
function isPrime(input){
    if(input > 2){
        for(i = 2; i < input; i++){
            if(input % i === 0)
                return false;
        }
        return true;
    }
    else if(input == 2)
        return true;
    else
        return false;
}
for (const value of arr) {
    if(isPrime(value)){
        result.push(value);
    }
}

console.log(result);