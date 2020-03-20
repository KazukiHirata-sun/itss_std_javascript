'use strict';

// このファイルを修正して、プルリクエストしてください。

var argv = process.argv.slice(2);
var result = [];
loop: for (const arg of argv) {
    if (arg < 2) continue;
    let i = 2;
    while (i < arg) {
        if (arg % i === 0)
            continue loop;
        i++;
    }
    result.push(parseInt(arg));
}
console.log(result);