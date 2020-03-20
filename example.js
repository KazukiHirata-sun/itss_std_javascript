#!/usr/bin/env node

'use strict';
// var i;
// for (i=process.argv.length-1;i>=2;i--) {
//     console.log((i-1)+"番目は"+process.argv[i]+"です");
// }


var string = process.argv[2]
console.log(string)
let left = string.split('=')[0]
let right = string.split('=')[1]
let A = left.split('+')[0]
let B = left.split('+')[1]
for (let counter=0;counter<=9;counter++){
    let a = parseInt(A.replace(/X/gi,counter))
    let b = parseInt(B.replace(/X/gi,counter))
    let c = parseInt(right.replace(/X/gi,counter))
    // console.log(a,b,c)
    if(a+b==c){
        console.log("X:", counter)
        return;
    }
}
console.log("NA")