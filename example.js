'use strict'; 
var numbers = process.argv.slice(2);
var max = Math.max.apply(Math, numbers); 
var min = Math.min.apply(Math, numbers);
var a = Math.floor((max+min)/2);
console.log(a);