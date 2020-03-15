#!/usr/bin/env node

'use strict';

// このファイルを修正して、プルリクエストしてください。
for (const arg of process.argv.slice(2).reverse().entries()){
    console.log(process.argv.slice(2).length-arg[0]+"番目は"+arg[1]+"です");
}
