#!/usr/bin/env node

'use strict';

// このファイルを修正して、プルリクエストしてください。
var list = []; //global

for (const arg of process.argv) {
    var numValue = Number(arg);
    if(!isNaN(numValue)) list.push(arg);
}

for(var i = 0; i < list.length - 1; i++){ // selection sort
    var indexOfMin = min(i);
    swap(i, indexOfMin);
}

console.log(list);

// additional function

function swap(a, b){ //swap list[a] & list[b]
    var c = list[a];
    list[a] = list[b];
    list[b] = c;
}

function min(from, to = list.length){
    var indexOfMin = from;
    for(var i = from; i < to; i++){
        if(list[indexOfMin] > list[i]) indexOfMin = i;
    }
    return indexOfMin;
}