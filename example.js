#!/usr/bin/env node

'use strict';
function test_prime(n)
{
  if (n===1)
  {
    return false;
  }
  else if(n === 2)
  {
    return true;
  }else
  {
    for(var x = 2; x < n; x++)
    {
      if(n % x === 0)
      {
        return false;
      }
    }
    return true;  
  }
}
var arr = [];
var i=0;
for (const arg of process.argv.slice(2)) {
    if(test_prime(parseInt(arg))) arr[i++] = parseInt(arg);
}
console.log(arr);
// このファイルを修正して、プルリクエストしてください。