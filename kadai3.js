'use strict';

let arr = [];
for (const arg of process.argv) {
    arr.push(arg);
}


let prime = [];
for (const value of arr ) {
    var flag = true;
    if (value < 2){
        flag = false;
    }
    else {
        for (var i = 2; i <= Math.sqrt(value); i++) {
            if (value % i === 0) {
                flag = false;
                break;
            }
        }
    }
    if (flag === true) {
        prime.push(value);
    }
}
console.log(prime);
