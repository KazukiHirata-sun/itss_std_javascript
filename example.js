#!/usr/bin/env node

'use strict';

const argv = process.argv.slice(2)
argv.reverse().forEach((item, index) => {
  console.log(`${argv.length-index}番目は${item}です`)
})
