#!/usr/bin/env node

'use strict';

//配列の宣言
const arr = [];

//配列に要素を追加
for (const arg of process.argv.slice(2)){
	arr.push(parseInt(arg, 10));
}

//小さい順にソート
for (var i =0; i< arr.length-1; i++){
	for(var j=i;j<arr.length; j++){
		if(arr[j]<arr[i]) arr[j] = [arr[i], arr[i] = arr[j]][0]; 
	}
}

//出力結果
console.log(arr);