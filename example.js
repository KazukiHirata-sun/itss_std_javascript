#!/usr/bin/env node

'use strict';

const transform1 = (str) => {
  let temp = Number(str.replace(/X/g, '0'));

  if (!isNaN(temp)) {
    return temp;
  } else {
    return null;
  }
}

const transform2 = (str) => {
  let temp1 = str.replace(/[1-9]/g,'0');

  let temp2 = Number(temp1.replace(/X/g,'1'));

  if (!isNaN(temp2)) {
    return temp2;
  } else {
    return null;
  }
}

if (process.argv.length == 2) {
  console.log("引数はありません。覆面算を入力してください");
}else if(process.argv.length >= 4) {
  console.log("スペースなしで、覆面算を入力してください");
} else {
  //数式 a+b=c の a,b,c　を取り出す
  let temp1 = process.argv[2].split('='); //['a+b','c']

  if (temp1.length != 2 || temp1[1]==='') {
    console.log("入力した覆面算のフォーマットが正しくありません");
  } else {
    let c = temp1[1];
    let temp2 = temp1[0].split('+'); //['a','b']
    
    if (temp2.length !== 2) {
      console.log("入力した覆面算のフォーマットが正しくありません");
    } else {
      let a = temp2[0];
      let b = temp2[1];
      /*
      数学を利用する：
      a + b = c
      a = a1 + a2 * X
      b = b1 + b2 * X
      c = c1 + c2 * X
      => X = (a1 + b1 - c1)/(c2 - b2 - a2)
      */
      let a1 = transform1(a);
      let a2 = transform2(a);
      let b1 = transform1(b);
      let b2 = transform2(b);
      let c1 = transform1(c);
      let c2 = transform2(c);
      let result = (a1 + b1 - c1)/(c2 - b2 - a2);
      
      Number.isInteger(result) ? console.log(result) : console.log('NA');
    }
  }
}
