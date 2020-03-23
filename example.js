#!/usr/bin/env node

'use strict';

// このファイルを修正して、プルリクエストしてください。
var array = []

for( let arg of process.argv.slice(2)){
    array.push(parseInt(arg))
}
	let Min = array[0];
	let Max = array[0];
for( let i = 1; i < array.length; i++){
    if (Min>array[i]) {
    	Min = array[i];
    }
    if(Max<array[i]){
    	Max = array[i];
    }
}
if((Min+Max)%2==0){
	console.log((Min+Max)/2);
}
else{
	console.log((Min+Max-1)/2);
}