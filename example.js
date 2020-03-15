#!/usr/bin/env node

'use strict';

// このファイルを修正して、プルリクエストしてください。

const isPrime = (num) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++) if (num % i === 0) return false;
  return num > 1;
};

const main = () => {
  var array = process.argv.slice(2);

  let doubled = array.filter((num) => isPrime(num));

  console.log(doubled);
};

main();
