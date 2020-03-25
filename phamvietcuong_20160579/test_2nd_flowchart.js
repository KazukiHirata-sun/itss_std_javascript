#!/usr/bin/env node

'use strict';

// このファイルを修正して、プルリクエストしてください。

function getNum(eqs){
    return eqs.split(/[+=*-/]/);
}

function getPar(eqs){
    return eqs.split(/[/number]/);
}

var myArgs = process.argv.slice(2);
console.log(myArgs);

console.log(getNum(myArgs[0]))