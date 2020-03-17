#!/usr/bin/env node

'use strict';

// このファイルを修正して、プルリクエストしてください。
var array = [];

function check_prime(n){
    var flag = true;
    if(n < 2){
        flag = false;
    }
    else if(n == 2){
        flag = true;
    }
    else{
        var i;
        var m = Math.sqrt(n);
        for(var i = 3; i < m; i++){
            if(n % i == 0){
                flag = false;
                break;
            }
        }
    }

    if(flag == true) {
        array.push(n);
    }
}

for (const arg of process.argv.slice(2)) {
    check_prime(arg);
}
console.log(array);