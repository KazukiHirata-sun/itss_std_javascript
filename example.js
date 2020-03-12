#!/usr/bin/env node

'use strict';

// このファイルを修正して、プルリクエストしてください。
// 問題3：素数だけを取り出す
for (const arg of process.argv) {
  // 数字だけを読む
  let n = arg
  if (n <= 1 || isNaN(n)) {
    // nより１小さいか、nが数字ではない場合何もしない
  }　else if (n < 4 && n > 1) {
    console.log(n)
  } else {
    let temp = 2
    let counter = 0　//　素数ならcounterがまま変わらない
    // 素数検出
    for (temp = 2; temp <= Math.ceil(n/2); temp++) {
      if(n % temp == 0) {
        counter++
        break
      }
    }
    // 素数なら表示する
    if(counter == 0) console.log(n)
  }  
}
