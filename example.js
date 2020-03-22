#!/usr/bin/env node

'use strict';

var A = process.argv.slice(2);
A = A.map(Number);
var max = Math.max.apply(null,A);
var min = Math.min.apply(null,A);
console.log(Math.floor((max+min)/2));
