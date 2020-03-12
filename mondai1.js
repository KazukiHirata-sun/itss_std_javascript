#!/usr/bin/env node

'use strict';

var len = process.argv.length;
for(var i=len-1; i>1; i--){
    console.log(process.argv[i]);
}