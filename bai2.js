'use strict';
let arr = [];
for (const arg of process.argv.slice(2)) {
    arr.push(arg);
}

arr.sort(function(a, b) { return a-b; });
console.log(arr);