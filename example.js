#!/usr/bin/env node

'use strict'; 

let argv = process.argv.slice(2);
let max = parseInt(argv[0]);
let min = parseInt(argv[0]);
for (const arg of argv)
{
    let x = parseInt(arg);
    if (x>max) max = x;
    if (x<min) min =x;
}
console.log(Math.floor((max+min)/2));

// このファイルを修正して、プルリクエストしてください。