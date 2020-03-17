#!/usr/bin/env node
'use strict';
// 文字列を変数に代入

let result = []
for (const arg of process.argv.slice(2)) {
    result.push(parseInt(arg))
    }
result.sort(function(a, b){return a - b});
console.log(result);

