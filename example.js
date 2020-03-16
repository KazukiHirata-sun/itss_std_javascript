#!/usr/bin/env node

'use strict';

var input ="anh nguyen huu tuan";
var res =input.split(" ");
res.reverse();
res.forEach(function(str,index){
    let num=res.length-index;
    console.log(num+" 番目　"+str+"　です。");
});
