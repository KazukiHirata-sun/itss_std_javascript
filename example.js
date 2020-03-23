#!/usr/bin/env node

"use strict";

// このファイルを修正して、プルリクエストしてください。
#!/usr/bin/env node

"use strict";
var test;
function check(array) {
  for (const num of array) {
    let a = parseInt(num);
    if (a > 20) return 0;
  }
  return 1;
}

function findMinArray(arr) {
  return Math.min.apply(null, arr);
}

function findMaxArray(arr) {
  return Math.max.apply(null, arr);
}

function medArray(min, max) {
  if ((min + max) % 2 == 0) return (min + max) / 2;
  else return (min + max - 1) / 2;
}
let array = process.argv.slice(2);

if ((test = check(array)) == 0) {
  console.log(`部屋番号の最大値は20`);
  let array = process.argv.slice(2);
} else {
  var min = findMinArray(array);
  var max = findMaxArray(array);
  var med = medArray(min, max);
  console.log(`${med}`);
}
