#!/usr/bin/env node

'use strict';
var strArray = process.argv.slice(2);
var numArray = strArray.map(Number);

numArray = numArray.filter((n) => {
  if (n<2) return false
    else {
      for (var i = 2; i*i <= n; i++) {
        if (n % i == 0) return false;
      }
    }
  return true;
});

console.log(numArray);


// このファイルを修正して、プルリクエストしてください。