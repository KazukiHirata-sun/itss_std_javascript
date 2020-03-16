#!/usr/bin/env node

'use strict';
let temp =[] ;
for( let i = 2; i<process.argv.length; i++){
    temp.push(process.argv[i]);
}
for(let i = temp.length-1; i >=0; i--){
    console.log((i+1)+"番目は"+temp[i]+"です。");
    
}

// このファイルを修正して、プルリクエストしてください。