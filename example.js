#!/usr/bin/env node

'use strict';

//課題5

let arrStrNum = process.argv[2].replace("+", "=").split("=");

for (var i = 0; i <= 9; ++i) {
	var [Num1, Num2, Num3] = arrStrNum.map(num => Number(num.replace(/X/g, i)));
	if (Num1 + Num2 === Num3) {
		console.log(i);
    	break;
    }
    if (i == 9) console.log("NA");
}


//課題2

// //配列の宣言
// const arr = [];

// //配列に要素を追加
// for (const arg of process.argv.slice(2)){
// 	arr.push(parseInt(arg, 10));
// }

// //小さい順にソート
// for (var i =0; i< arr.length-1; i++){
// 	for(var j=i;j<arr.length; j++){
// 		if(arr[j]<arr[i]) arr[j] = [arr[i], arr[i] = arr[j]][0]; 
// 	}
// }

// //出力結果
// console.log(arr);