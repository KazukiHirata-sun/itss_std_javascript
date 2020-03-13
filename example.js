#!/usr/bin/env node

'use strict';

// このファイルを修正して、プルリクエストしてください。
const compare = (a, b) => {
    if(a > b) return 1;
    else if(a < b) return -1;
    else return 0;
}

var input = process.argv.slice(2);

console.log(input.sort(compare));