#!/usr/bin/env node

'use strict';
const result = process.argv.slice(2)

result.reverse().forEach((res, index) => {
    console.log(result.length - index + "番目は" + res + "です")
})

