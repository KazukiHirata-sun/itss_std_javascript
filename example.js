#!/usr/bin/env node

"use strict";

// このファイルを修正して、プルリクエストしてください。

const input = [];
let result = [];

input.push(...process.argv.slice(2));

input.forEach(element => {
  let isPrime = true;

  if (element < 2) return;

  for (let i = 2; i <= element / 2; i++) if (element % i == 0) isPrime = false;

  if (isPrime) result.push(element);
});

console.log(result);
