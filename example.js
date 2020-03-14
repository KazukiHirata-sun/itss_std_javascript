'use strict';

var arr=[];
var i = 0;

for (const arg of process.argv) {
    if (i > 1) {
        arr.push(arg);
    }
    i++;
}

function sortArray() { 
  arr.sort() 
  console.log(arr); 
} 
 
sortArray();