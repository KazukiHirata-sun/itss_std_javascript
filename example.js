#!/usr/bin/env node

'use strict';
//console.log(process.argv)
var len = process.argv.length - 1;
for (　; len > 1; len -- ){
    console.log( (len - 1) + "番目は " + process.argv[len]+" です。");
}