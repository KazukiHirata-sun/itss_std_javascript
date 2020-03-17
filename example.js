#!/usr/bin/env node

'use strict';

// このファイルを修正して、プルリクエストしてください。
var n;
for (n=process.argv.length-1;n>=2;n--) {
    var name = process.argv[n];
    console.log((n-1)+"番目は"+name+"です");
}