#!/usr/bin/env node

'use strict';

var len = process.argv.length;
for(var i=len-1; i>1; i--){
    console.log((i-1) + "番目は"+process.argv[i]+"です");
}