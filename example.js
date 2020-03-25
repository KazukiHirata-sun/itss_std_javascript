#!/usr/bin/env node

'use strict';

// このファイルを修正して、プルリクエストしてください。
if (process.argv.length != 8) {
    console.log("2つの日付(日付1と日付2)を入力してください。");
    return;
}

var input = []

for( let x of process.argv.slice(2)){
    input.push(parseInt(x))
}

var date1 = new Date(input[0], input[1], input[2]);
var date2 = new Date(input[3], input[4], input[5]);

console.log(Math.abs(Math.floor((Date.UTC(date2.getFullYear(), date2.getMonth(), date2.getDate()) - Date.UTC(date1.getFullYear(), date1.getMonth(), date1.getDate()) ) /(1000 * 60 * 60 * 24))));