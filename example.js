#!/usr/bin/env node

'use strict';
var j=process.argv.length-1;
process.argv.reverse();
for(const i of process.argv){
    console.log(`${j}番目は${i}です`);
    j-=1;
    if(j<=0)break;
}

// このファイルを修正して、プルリクエストしてください。
