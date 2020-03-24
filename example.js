#!/usr/bin/env node

'use strict';

// このファイルを修正して、プルリクエストしてください。
// 課題6
var argv = process.argv.slice(2)
var min = argv[0];
var max = argv[0];
for (let i = 1; i < argv.length; i++) {
    if (argv[i] < min)
        min = argv[i];
    else if (argv[i] > max)
        max = argv[i];
}
var result = (parseInt(min) + parseInt(max)) / 2;
console.log(result)
