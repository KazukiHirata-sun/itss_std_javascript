#!/usr/bin/env node

'use strict';

// このファイルを修正して、プルリクエストしてください。

function ifPrime(a){
    let i=2;
    while (i*i<a){
        if (a%i === 0) return false;
        i+=1;
    }
    return true;
}

var myArgs = process.argv.slice(2);

let str = "";

for (var VP of myArgs){
    let vp = parseInt(VP);
    if (ifPrime(vp)) str = str + vp + " ";
}
console.log(str);