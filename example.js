#!/usr/bin/env node

'use strict';

var array = process.argv.slice(2);
var intArray = [];
if(array.length == 0){
  console.log("引数はありません。引数を入力してください");
}

for(let val of array){
  if(Number(val) === NaN){
    console.log("数字しか処理できません。数字を入力してください");
    break;
  }
  intArray.push(Number(val));
}

for(let x = 0; x < intArray.length; x++){
  for(let y = x + 1; y < intArray.length; y++){
    if(intArray[x] > intArray[y]){
      let temp = intArray[x];
      intArray[x] = intArray[y];
      intArray[y] = temp;
    }
  }
}

console.log(intArray);
