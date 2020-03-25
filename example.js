#!/usr/bin/env node

'use strict';

const argv = process.argv.slice(2)

const date1 = new Date(argv[0], argv[1] - 1, argv[2])
const date2 = new Date(argv[3], argv[4] - 1, argv[5])

const diffDays = parseInt((date2 - date1) / (1000 * 60 * 60 * 24), 10)
console.log(diffDays)

