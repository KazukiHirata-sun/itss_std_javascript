#!/usr/bin/env node

'use strict';

<<<<<<< HEAD
var month = [31,28,31,30,31,30,31,31,30,31,30,31];
var days1 = process.argv[2] * 365;
var days2 = process.argv[5] * 365;
function leapYears (y){
    return Math.floor(y/4-y/100+y/400);
}

function getDayOfThisYear(y, m, d){// y= year; m = month; d = day
    var days = Number(d);
    
    for(var i=0; i<m-1; i++){
        days = days + month[i];
    }
    
    if(m>2){
        if(y%400 === 0 || (y%100!==0 && y%4===0)){
            days = days + 1;
        }
        
    }
    
    return days;
}

days1 = days1 + leapYears(process.argv[2]) 
        + getDayOfThisYear(process.argv[2], process.argv[3], process.argv[4]);
days2 = days2 + leapYears(process.argv[5]) 
        + getDayOfThisYear(process.argv[5], process.argv[6], process.argv[7]);
console.log(Math.abs(days1 - days2));

=======
var len = process.argv.length;
for(var i=len-1; i>1; i--){
    console.log((i-1) + "番目は"+process.argv[i]+"です");
}
>>>>>>> 8956711186ca2d4ac93ed44a9af91c4a3f64e4e3
