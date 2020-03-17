'use strict';

// 引数の配列の要素を順番に表示
let name = [];
for (const arg of process.argv.slice(2)) {
    name.push(arg);
}

name.reverse();
let tmp= name.length;
for (const value of name) {
    
    if(tmp > 0)
        console.log(tmp + "番目は" + value +"です");
    tmp--;
}