#!/usr/bin/env node

'use strict';

var arr = process.argv.slice(2);
for(var i=0; i<arr.length; i++) { 
    arr[i] = parseInt(arr[i], 10); 
}
arr = arr.filter((n) => {
  if (n<2) return false
    else {
      for (var i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
      }
    }
  return true;
});
console.log(arr);