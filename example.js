#!/usr/bin/env node

'use strict';

// このファイルを修正して、プルリクエストしてください。

var date1 = (process.argv[2])+'-'+(process.argv[3])+'-'+(process.argv[4]);
var date2 = (process.argv[5])+'-'+(process.argv[6])+'-'+(process.argv[7]);

console.log(date1);
console.log(date2);

var dt1 = new Date(date1);
var dt2 = new Date(date2);

var date_diff_indays = Math.floor((Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) - Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate()) ) /(1000 * 60 * 60 * 24));
console.log(date_diff_indays);
