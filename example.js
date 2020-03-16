#!/usr/bin/env node

'use strict';

// このファイルを修正して、プルリクエストしてください。

var input = "anh hai long thin";
var res = input.split(" ");
res.reverse();
res.forEach( function(str,index){
    let num = res.length - index;
    console.log(num + "番目は" + str + "です");
});
