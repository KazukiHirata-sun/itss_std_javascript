#!/usr/bin/env node

'use strict';

// このファイルを修正して、プルリクエストしてください。
let result = []

for (const arg of process.argv.slice(2)) {
    let i = 2;
    while (arg % i != 0) {
        i++;
    }
    if (i == arg) {
        result.push(Number(arg))
    }
}

console.log(result)
