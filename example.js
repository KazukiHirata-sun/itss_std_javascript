#!/usr/bin/env node

'use strict';

// このファイルを修正して、プルリクエストしてください。
//mondai 1
// let x=process.argv.slice(2).length;
// for (const arg of process.argv.slice(2).reverse()) {
//     console.log(`${x} 番目は${arg}です。`);
//     x--;
// }


//mondai6
var argv = process.argv.slice(2);
function find_max(argv){
    let max=argv[0];
    var i=1;
    for (i=1;i<argv.length; i++){
        if(max<argv[i])
            max=argv[i];
    }
    return max;
}
function find_min(argv){
    let min=argv[0];
    var j=1;
    for (j=1;j<argv.length; j++){
        if(min>argv[j])
            min=argv[j];
    }
    return min;
}

var min=find_min(argv);
var max=find_max(argv);
// console.log(min);
// console.log(max);
var tmp=min/2 + max/2;
// console.log(tmp);

function find_room(argv){
    let i=1;
    var difference=Math.abs(argv[0]-tmp);
    var index=0;
    for(i=1;i<argv.length;i++){
        var difference1=Math.abs(argv[i]-tmp);
        if(difference>difference1){
            difference=difference1;
            index=i;
        }
    }
    return index;
}

var x=find_room(argv);
console.log(argv[x]);


