#!/usr/bin/env node

'use strict';

// このファイルを修正して、プルリクエストしてください。
let x=process.argv.slice(2).length;
for (const arg of process.argv.slice(2).reverse()) {
    console.log(`${x} 番目は${arg}です。`);
    x--;
}
