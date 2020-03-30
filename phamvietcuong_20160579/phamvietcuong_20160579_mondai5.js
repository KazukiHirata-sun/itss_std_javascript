#!/usr/bin/env node

'use strict';

// このファイルを修正して、プルリクエストしてください。

function getNum(eqs){
    return eqs.split(/[+=*-/]/);
}

function getPar(eqs){
    return eqs.split(/[/number]/);
}

function isEmpty(obj) {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
}

var myArgs = process.argv.slice(2);
console.log(myArgs);
console.log(typeof(myArgs))
if (!isEmpty(myArgs)){
    console.log("this is right files")

    console.log(getNum(myArgs[0]))
    console.log(getPar(myArgs[0]))



    
}
else {
    console.log("You need parameter")
}