#!/usr/bin/env node

'use strict';

// このファイルを修正して、プルリクエストしてください。
function printPrimeNum()
{
    let array = [];
    for(var j = 2;j<process.argv.length;j++){
        let flag = true;
        let n = parseInt(process.argv[j]);
        if(n <2) {
            flag = false;
        }else{
            for (var i=2; i<n-1; i++){
                if(n%i===0){
                    flag = false;
                    break;
                }
            }
        }
        if(flag === true) array.push(n);
      }
      console.log(array);
}

printPrimeNum();