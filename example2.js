#!/usr/bin/env node

'use strict';

// このファイルを修正して、プルリクエストしてください。
var array = process.argv[2].split('+');
var str1 = array[0];
var str2 = array[1].split('=')[0], 
    str3 = array[1].split('=')[1];

var s1, s2, s3;
var count;
var tmp = false;

for(let i = 0; i < 10; i++){
    s1 = parseInt(str1.replace(/X/g, i));
    s2 = parseInt(str2.replace(/X/g, i));
    s3 = parseInt(str3.replace(/X/g, i));
    if( s1+s2 == s3){
        count = i;
        tmp = true;
        break;
    }
}

if(tmp){
    console.log(count);
} else {
    console.log('NA');
}