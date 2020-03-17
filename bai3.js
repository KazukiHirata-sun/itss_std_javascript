'use strict';

let arr = [];
for (const arg of process.argv.slice(2)) {
    arr.push(arg);
}


let prime = [];
for (const value of arr ) {
    var tmp = true;
    if (value < 2){
        tmp = false;
    }
    else {
        for (var i = 2; i <= Math.sqrt(value); i++) {
            if (value % i === 0) {
                tmp = false;
                break;
            }
        }
    }
    if (tmp === true) {
        prime.push(value);
    }
}
  console.log(prime);