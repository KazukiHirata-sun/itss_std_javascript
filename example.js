#!/usr/bin/env node

'use strict';

// このファイルを修正して、プルリクエストしてください。
var operation = process.argv[1];
function mainFunc(){
    var number1, number2, result;
    for(let value = 0; value < 10; value++){
        let new_operation = operation.replace(/X/g, value);
        number1 = new_operation.split(/[+=]+/)[0];
        number2 = new_operation.split(/[+=]+/)[1];
        result = new_operation.split(/[+=]+/)[2];
        if(parseInt(number1) + parseInt(number2) == parseInt(result))
            return value;
    }
    return null;
}

var value = mainFunc();
if(value === null)
    console.log("NA");
else
    console.log(value);

<<<<<<< HEAD
=======
console.log(input.sort(compare));
>>>>>>> 18c9c23... 課題2：完了
