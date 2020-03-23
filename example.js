#!/usr/bin/env node

'use strict';
const room = process.argv.slice(2).map((i => parseInt(i))) 
let max = room[0]
let min = room[0]

room.forEach((res, index) => {
    if (min > res) { min = res }
    if (max < res) { max = res }
})
console.log(`${min == 0 ? Math.floor(max/2) : Math.floor((max + min)/2)}`)

