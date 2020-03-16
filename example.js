#!/usr/bin/env node

'use strict';

var res = []

for(const arg of process.argv.slice(2)) {
  res.push(arg)
}
res.reverse();
res.forEach( function(str,index){
    let num = res.length - index;
    console.log(num + "番目は" + str + "です");
});
