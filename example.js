#!/usr/bin/env node

'use strict';
var arr = []

for( let a of process.argv.slice(2)){
    arr.push(parseInt(a))
}

for( let i = 0; i < arr.length; i++){
    for(let j = 0; j < arr.length - i -1; j++){
        if(arr[j] > arr[j+1]){
            let temp = arr[j];
			arr[j] = arr[j + 1];
			arr[j + 1] = temp;
        }
    }
}

console.log(arr)

// このファイルを修正して、プルリクエストしてください。
