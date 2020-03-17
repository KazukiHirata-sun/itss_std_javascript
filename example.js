#!/usr/bin/env node

'use strict';
const result = []
for (const arg of process.argv) {
    result.push(arg)
}

result.reverse();
result.map((res, index) => {
    let i = result.length - index
    console.log(i + "番目は" + res + "です")
})

