'use strict'; 
var numbers = process.argv.slice(2);
 
// Lấy giá trị lớn nhất và nhỏ nhất
var max = Math.max.apply(Math, numbers); 
var min = Math.min.apply(Math, numbers);
var a = Math.floor((max+min)/2);
console.log(a);