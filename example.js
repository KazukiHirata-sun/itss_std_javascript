#!/usr/bin/env node

'use strict';

var arrStr = process.argv.slice(2);

function selectionSort(arr) {
    let minIndex, temp,
        len = arr.length;

    for (let i = 0; i < len; i++) {
        minIndex = i;
        // find min number
        for (let  j = i+1; j < len; j++) {
            if(arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        // swap
        temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
    return arr;
}

if(arrStr.length === 0){
    console.log("No number from command line !")
}
var arrInt = [];
for (const arg of arrStr) {
    if(isNaN(arg)){
        console.log("Invalid number !")
        return;
    }

    let x = parseInt(arg, 10);
    arrInt.push(x);
}

console.log(selectionSort(arrInt));