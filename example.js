#!/usr/bin/env node

'use strict';

// このファイルを修正して、プルリクエストしてください。
let args = process.argv.slice(2);
let length = args.length;
for (let i = 0; i < length; i++) {
	let index = length - 1 - i;
	console.log(`${index + 1}番目は${args[index]}です`);
}