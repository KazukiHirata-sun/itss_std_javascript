#!/usr/bin/env node

'use strict';

// このファイルを修正して、プルリクエストしてください。
let array = [];
const n = process.argv.length
for (let i = 2; i < n; i++) {

    let tmp = Number(process.argv[i]);
    if (isNaN(tmp)) {
        console.log(`${process.argv[i]} - 数字ではない`);

    } else {
        array.push(tmp);
        array.sort(function(a, b) { return a - b });
    }
    //array.sort();
}
console.log(array);