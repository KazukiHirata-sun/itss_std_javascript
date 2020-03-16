#!/usr/bin/env node

"use strict";

var args = process.argv.slice(2);

for (var i = args.length - 1; i >= 0; i--) {
  console.log(i + 1 + "番目は" + args[i] + "です");
}
