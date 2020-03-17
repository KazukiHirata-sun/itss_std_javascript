#!/usr/bin/env node

'use strict';

for (const arg of process.argv.slice(2)) {
    console.log(arg);
}

const arr= '${arg}'
console.log(arr);



