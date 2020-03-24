'use strict';

let input = [];

for (const arg of process.argv.slice(2)) {
    input.push(Number(arg));
}

const daysOfMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

class Date {
    constructor(y, m, d) {
        this.y = y;
        this.m = m;
        this.d = d;
    }
}

var countLeapYears = (date) => { 
    let year = date.y;
    if (date.m <= 2) 
        year--; 
    return Math.floor(year / 4) - Math.floor(year / 100) + Math.floor(year / 400); 
}

var getDiffBetweenTwoDates = (date1, date2) => { 
    let n1 = date1.y*365 + date1.d;  
    for (let i=0; i<date1.m - 1; i++) 
        n1 += daysOfMonth[i];
    n1 += countLeapYears(date1);
    let n2 = date2.y*365 + date2.d; 
    for (let i=0; i<date2.m - 1; i++) 
        n2 += daysOfMonth[i]; 
    n2 += countLeapYears(date2); 
    return Math.abs(n1 - n2); 
}

var date1 = new Date(input[0], input[1], input[2]);
var date2 = new Date(input[3], input[4], input[5]);
console.log(getDiffBetweenTwoDates(date1,date2));