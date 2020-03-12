#!/usr/bin/env node

'use strict';

// このファイルを修正して、プルリクエストしてください。
let sort = [];
for (const arg of process.argv) {
  sort.push(parseInt(arg));
}
sort.splice(0, 2);
function selectionSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    let idmin = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[idmin]) {
        idmin = j;
      }
    }
    //取り替える
    let t = array[i];
    array[i] = array[idmin];
    array[idmin] = t;
  }
  return array;
}
console.log (selectionSort(sort));
