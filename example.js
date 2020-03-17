#!/usr/bin/env node

'use strict'; 

var arrStr = process.argv.slice(2);

let bubbleSort = (inputArr) => {
    let len = inputArr.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if (inputArr[j] > inputArr[j + 1]) {
                let tmp = inputArr[j];
                inputArr[j] = inputArr[j + 1];
                inputArr[j + 1] = tmp;
            }
        }
    }
    return inputArr;
};

var arrInt = [];
for (const arg of arrStr) {
    if(isNaN(arg)){
        return;
    }
    
    let x = parseInt(arg, 10);
    arrInt.push(x);
}
console.log("~~小さい順に並び替える~~");
console.log(bubbleSort(arrInt));

// このファイルを修正して、プルリクエストしてください。