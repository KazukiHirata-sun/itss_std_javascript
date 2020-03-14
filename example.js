#!/usr/bin/env node

'use strict';

// このファイルを修正して、プルリクエストしてください。
var arr_size = prompt("Input the size of the array:");
var i, j;
var arr = Array();

for(i=0; i<arr_size; i++){
    var flag = true;
    value = prompt("Input the value of number "+(i+1));
    if(value > 2){
        for(j = 2; j < Math.sqrt(value); j++){
            if(value % j == 0){
                flag = false;
                break;
            }
        }
        if(flag == true)
            arr.push(value);
    }
}
alert("Prime number in your array: " + arr);