#!/usr/bin/env node

'use strict';

// このファイルを修正して、プルリクエストしてください。

//配列の宣言
var res = []

//配列に要素を追加
for(const arg of process.argv.slice(2)) {
  res.push(arg)
}

//最後の要素から配列を参照し、必要な形式で印刷
for(let i = res.length - 1; i >= 0; i--) {
  console.log(i+1 + '番目' + res[i] + 'です')
}