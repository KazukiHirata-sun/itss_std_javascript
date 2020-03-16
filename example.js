#!/usr/bin/env node

'use strict';

// このファイルを修正して、プルリクエストしてください。

var array = process.argv.slice(2);
array = array.filter((n) => {
  if (n<2) return false;
  else if (n==2) return true;
    else {
      for (let i = 2, s = Math.sqrt(n); i <= s; i++) {
        if (n % i === 0) return false;
      }
    }
  return true;
});
console.log(array);
