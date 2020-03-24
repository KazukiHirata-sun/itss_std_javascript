
#!/usr/bin/env node

'use strict';

var arg = process.argv.slice(2)[0];

if ((arg.match(/X/g) || []).length <= 1) {
    console.log('NA');
    process.exit(1);
}

for (var i = 0; i <= 9; i++) {
    var str = arg.replace(/X/g, i);
    var substr = str.split(/[+=]+/);
    substr[0] = Number(substr[0]);
    substr[1] = Number(substr[1]);
    substr[2] = Number(substr[2]);
    if (substr[0] + substr[1] == substr[2]) {
        console.log(i);
        process.exit(1);
    }
}

console.log('NA');
