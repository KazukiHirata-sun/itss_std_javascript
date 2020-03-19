#!/usr/bin/env node

'use strict';

// このファイルを修正して、プルリクエストしてください。

for(let i = 0; i < 10; i++) {
	let str = process.argv[2];

	let arr = str.split('');

	arr.forEach((value, index) => {
		if(value === 'X') {
			arr[index] = String(i);
		} else if(value === '=') {
			arr[index] = '+';
		}
	});

	let arr1 = arr.join('').split('+');

	arr1.forEach((value, index) => {
		arr1[index] = Number(value);
	});

	if(arr1[1] + arr1[0] == arr1[2]) {
		console.log(i);
		break;
	}
}
