#!/usr/bin/env node

'use strict';

// このファイルを修正して、プルリクエストしてください。
var arr = []

for( let a of process.argv.slice(2)){
    arr.push(parseInt(a))
}

for( let x = 0; x < arr.length; x++){
    for(let y = 0; y < arr.length - x -1; y++){
        if(arr[y] > arr[y+1]){
            let temp = arr[y];
			arr[y] = arr[y + 1];
			arr[y + 1] = temp;
        }
    }
}

console.log(arr);
