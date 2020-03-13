'use strict';

// 引数の配列の要素を順番に表示
let arr = [];
for (const arg of process.argv) {
    arr.push(arg);
}

arr.reverse();
let term = 5;
for (const value of arr) {
    term--;
    if(term > 0)
        console.log(term + "番目は" + value +"です");
}
