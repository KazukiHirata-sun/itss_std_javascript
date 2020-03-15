#!/usr/bin/env node

'use strict';

// このファイルを修正して、プルリクエストしてください。
// 課題３
let argv = process.argv.slice(2)
let result = []

for (const arg of argv) {
    let x = parseInt(arg), flag = true
    if (!isNaN(x)) {
        for(let i = 2; i <= x - 1; i++) 
            if (x % i == 0) { 
                flag = false; 
                break; 
            } 
    }
    
    if (flag) {
        result.push(x)
    }
}

console.log(result)
