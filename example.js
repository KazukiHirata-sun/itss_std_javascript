#!/usr/bin/env node

'use strict';
const result = []
for (const arg of process.argv) {
    result.push(arg)
}

result.reverse();
result.map((res, index) => {
    console.log(result.length - index + "番目は" + res + "です")
})

