#!/usr/bin/env node

'use strict';

// このファイルを修正して、プルリクエストしてください。

function getNum(eqs){
    return eqs.split(/[+=*-//]/);
}

function get(eqs){
    return eqs.split(/^[+=*-//]/);
}

var myArgs = process.argv.slice(2);
console.log(myArgs);

console.log(getNum(myArgs[0]))