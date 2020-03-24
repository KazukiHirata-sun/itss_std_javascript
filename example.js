#!/usr/bin/env node

'use strict';

// このファイルを修正して、プルリクエストしてください。

function check_room(rooms) {
  for (const room of rooms) {
    let a = parseInt(room);
    if (a > 20) 
        return 0;
  }
  return 1;
}

function find_med(argv){
    let min = argv[0];
    let max = argv[0];
    var i=1;
    for (i=1;i<argv.length; i++){
        if(argv[i]>max)
            max=argv[i];
        else {
            if(argv[i]<min)
            min=argv[i];
        }
    }
    max = parseInt(max);
    min = parseInt(min);
    let med = (max+min)/2;
    med = parseInt(med);
    return med;
}

let argv = process.argv.slice(2);
if (check_room(argv) === 0) {
  console.log(`Room's number have to smaller than 21`);
} else {
  var med = find_med(argv);
  console.log(`${med}`);
}