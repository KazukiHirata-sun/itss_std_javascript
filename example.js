#!/usr/bin/env node

'use strict';

// このファイルを修正して、プルリクエストしてください。
const arr=[123 2 121 2 23];
arr.sort(function(a, b){
    if (a > b)
        return 1;
    if (a < b)
        return -1;
    return 0
});
console.log(arr);