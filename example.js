#!/usr/bin/env node

'use strict';

var args = process.argv.slice(2);

var value1 = args[0]+"/"+args[1]+"/"+args[2];
var value2 = args[3]+"/"+args[4]+"/"+args[5]; 
var time1 = Date.parse(value1);
var time2 = Date.parse(value2);

var days = (time2 - time1)/(24*60*60*1000);
console.log(days);