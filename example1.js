#!/usr/bin/env node

'use strict';
var arr = [];
var n = 0;
for (const arg of process.argv.slice(2)) {
 arr[n] = arg;
 n++;
}
for (var i = (n-1); i>=0; i--){
    console.log((i+1) + "番目は" + arr[i] + "です");
    if(i===0){
        break;
    }
    console.log();
}