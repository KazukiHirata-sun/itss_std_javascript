#!/usr/bin/env node

'use strict';

// このファイルを修正して、プルリクエストしてください。

const main = () => {
  var array = process.argv.slice(2);

  array.forEach((element) => parseInt(element));
  console.log(Math.floor((Math.max(...array) + Math.min(...array)) / 2).toString());
};

main();
