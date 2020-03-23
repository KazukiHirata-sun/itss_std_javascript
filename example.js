#!/usr/bin/env node

'use strict';

// このファイルを修正して、プルリクエストしてください。
var arr = [];
var n = 0;

function sum(arr){
    var sum = 0;
    for (var i = 0; i < arr.length; i++){
            sum += arr[i];
    }
    return sum;
}
 
for (const arg of process.argv.slice(2)) {
    arr[n] = Number(arg);
    n++;
}

var s = sum(arr);
var a = (s%n)/n;

if(a > 0.5){
    console.log(Math.floor(s/n) + 1);
}
else{
    console.log(Math.floor(s/n));
}


