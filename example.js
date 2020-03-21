#!/usr/bin/env node

'use strict';

var array = process.argv[2].split('+');
var f = array[0];
var g = array[1].split('=')[0];
var h = array[1].split('=')[1];

var a, b, c;
var x, counter = 0;

for(let i = 0; i < 10; i++){
    a = parseInt(f.replace(/X/g, i));
    b = parseInt(g.replace(/X/g, i));
    c = parseInt(h.replace(/X/g, i));
    if( a+b == c){
        x = i;
        counter++;
    }
}

if(counter == 1){
    console.log(x);
} else {
    console.log('NA');
}