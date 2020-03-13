'use strict';
let arr = [];
for (const arg of process.argv) {
    arr.push(arg);
}

arr.sort(function(a, b) { return a-b; });
console.log(arr);
