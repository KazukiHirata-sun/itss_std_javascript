#!/usr/bin/env node

'use strict';

// このファイルを修正して、プルリクエストしてください。
let argv = process.argv.slice(2)
let b = parseInt(argv[0]), s = parseInt(argv[0])
for (const arg of argv) {
  let x = parseInt(arg)
  if (x > b) b = x
  if (x < s) s = x
}
console.log(Math.floor((b+s)/2))
