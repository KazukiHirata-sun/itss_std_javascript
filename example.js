#!/usr/bin/env node

'use strict';

var string = process.argv[2]
let left = string.split('=')[0]
let right = string.split('=')[1]
let A = left.split('+')[0]
let B = left.split('+')[1]
for (let count=0;count<=9;count++){
    let a = parseInt(A.replace(/X/gi,count))
    let b = parseInt(B.replace(/X/gi,count))
    let c = parseInt(right.replace(/X/gi,count))
    // console.log(a,b,c)
    if(a+b==c){
        console.log("X =", count)
        return;
    }
}
console.log("NA") 