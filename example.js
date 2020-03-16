#!/usr/bin/env node

'use strict';

var A = process.argv.slice(2);
for(var i=0; i<A.length; i++) { 
    A[i] = parseInt(A[i], 10); 
}
A = A.filter((n) => {
  if (n<2) return false
    else {
      for (var i = 2; i*i <= n; i++) {
        if (n % i === 0) return false;
      }
    }
  return true;
});
console.log(A);
