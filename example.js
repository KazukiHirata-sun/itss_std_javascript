#!/usr/bin/env node

'use strict';

// このファイルを修正して、プルリクエストしてください。
var date1 = new Date(process.argv[2], process.argv[3]-1, process.argv[4]);
var date2 = new Date(process.argv[5], process.argv[6]-1, process.argv[7]);
var range = Math.abs(date2.getTime() - date1.getTime());
console.log("result:", range/(1000*3600*24));