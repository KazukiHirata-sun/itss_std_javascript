#!/usr/bin/env node

'use strict';

// このファイルを修正して、プルリクエストしてください。
'use strict';

let i, value, list = "";

function isPrime(value){
    if(value > 2){
        for(i = 2; i < value; i++){
            if(value % i == 0)
                return false;
        }
        return true;
    }
    else if(value == 2)
        return true;
    else
        return false;
}

for (value of process.argv.slice(2)){
    if(isPrime(value))
        list += value +"; ";
}
console.log("List of prime number is: "+list);



