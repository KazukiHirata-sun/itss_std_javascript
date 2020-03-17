'use strict';
let arr = [];
for (const arg of process.argv.slice(2)) {
    arr.push(arg);
}
let a1=Array.from(arr[0]);
let a2=Array.from(arr[2]);
let a3=Array.from(arr[4]);
let b1=a1[0]*10;

console.log(a1);
console.log(b1);
var flag = typeof b1;
console.log(flag);

