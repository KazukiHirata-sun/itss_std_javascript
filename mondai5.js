#!/usr/bin/env node

"use strict";

var arg = process.argv.slice(2)[0];
var numbers = new Array(3);
var state = 0;
numbers[0] = new Array();

for (var i = 0; i < arg.length; i++) {
    var c = arg[i].toUpperCase();;
    if (c == "+" || c == "=") {
        state++;
        numbers[state] = new Array();
        continue;
    } else if (c == "X") {
        numbers[state].unshift("X");
    }
    else {
        numbers[state].unshift(parseInt(c, 10));
    }
}

// caculate
var x = 0;
var v = 0;
for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    for (let j = 0; j < element.length; j++) {
        const n = element[j];
        // console.log(i, j, n);
        if (n == "X") {
            const a = (-1) ** (Math.floor(i / 2)) * (10 ** (j));
            // console.log(a);
            x -= a;
        } else {
            const a = (-1) ** (Math.floor(i / 2)) * (10 ** (j)) * n;
            // console.log(a);
            v += a;
        }
    }
}
if ((v % x) == 0 && (v / x) >= 0) {
    console.log(v / x);
}
else {
    console.log('NaN')
}
