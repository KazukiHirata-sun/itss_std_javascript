#!/usr/bin/env node

'use strict';

// このファイルを修正して、プルリクエストしてください。

let number;
let arr = [];

for(let i = 2; i <= 6; i++) {
	number = Number(process.argv[i]);
	arr.push(number);
}

arr.sort((a, b) => {
	if(a > b) return 1;
	else if(a < b) return -1;
	else return 0;
});

console.log(arr);