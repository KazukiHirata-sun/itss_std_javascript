#!/usr/bin/env node

'use strict';

// このファイルを修正して、プルリクエストしてください。
var input = [];
var i = 0;

for (const arg of process.argv.slice(2)) {
    input[i] = parseInt(arg) ;
    i++;
}

var y1 = input[0], m1 = input[1], d1 = input[2];
var y2 = input[3], m2 = input[4], d2 = input[5];
var n1 = 0, n2 = 0;

var month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

var k ;

// 日付１
k = 0;
for (let N = 0; N < y1; N++) {
    if ( N % 100 === 0 ) {
        if(N % 400 === 0){
            k += 1;
        }
    }
    else if ( N % 100 != 0) {
        if(N % 4 === 0){
            k += 1;
        }
    }
}

n1 = y1 * 365 + k;

for (let index = 0; index < m1 - 1; index++) {
    n1 += month[index];
}

n1 += d1;

// 日付２
k = 0;
for (let N = 0; N < y2; N++) {
    if ( N % 100 === 0 ) {
        if(N % 400 === 0){
            k += 1;
        }
    }
    else if ( N % 100 != 0) {
        if(N % 4 === 0){
            k += 1;
        }
    }
}

n2 = y2 * 365 + k;

for (let index = 0; index < m2 - 1; index++) {
    n2 += month[index];
}

n2 += d2;

// 2つの日付の間の日数
var result =  n2 - n1; 

console.log(result);