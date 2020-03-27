#!/usr/bin/env node

'use strict';

// このファイルを修正して、プルリクエストしてください。
var arr = [];
var n = 0;

for (const arg of process.argv.slice(2)) {
    arr[n] = Number(arg);
    n++;
}
arr.sort(function(a,b){return a-b});

console.log(Math.floor((arr[0]+arr[n-1])/2));


