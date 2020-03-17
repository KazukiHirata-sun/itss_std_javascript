#!/usr/bin/env node

'use strict';

// このファイルを修正して、プルリクエストしてください。
var array = []

for( let arg of process.argv.slice(2)){
    array.push(parseInt(arg))
}

for( let i = 0; i < array.length; i++){
    for(let j = 0; j < array.length - i -1; j++){
        if(array[j] > array[j+1]){
            let temp = array[j];
			array[j] = array[j + 1];
			array[j + 1] = temp;
        }
    }
}

console.log(array)