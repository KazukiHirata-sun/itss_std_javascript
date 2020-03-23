#!/usr/bin/env node

'use strict';


var array = process.argv[2].split('+');
var string1 = array[0];
var string2 = array[1].split('=')[0], string3 = array[1].split('=')[1];

var f, g, h;
var x, counter = 0;

for(let i = 0; i < 10; i++){
    f = parseInt(string1.replace(/X/g, i));
    g = parseInt(string2.replace(/X/g, i));
    h = parseInt(string3.replace(/X/g, i));
    if( f+g == h){
        x = i;
        counter++;
    }
}

if(counter != 1){
    console.log('NA');
} else {
    console.log(x);
}