#!/usr/bin/env node

'use strict';
var A = process.argv.slice(2);
A = A.map(Number);
var maxInNumbers = Math.max.apply(Math, A); 
var minInNumbers = Math.min.apply(Math, A);
var floor = (maxInNumbers+minInNumbers)/2;
console.log(floor);