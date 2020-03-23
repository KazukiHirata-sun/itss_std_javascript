#!/usr/bin/env node
'use strict';
// 文字列を変数に代入
//example 2011 12 30 2022 11 3

let result = []

for (const arg of process.argv.slice(2)) {
    result.push(parseInt(arg))
}

const daysPerMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

class date {
    constructor(year, month, day) {
        this.year = year
        this.month = month
        this.day = day
    }
    get countDaysFromFirstDate() {
        let days = 365 * this.year;
        days += countDaysOfThisYear(this.month, this.day)
        days += countLeapYears(this.year, this.month)
        return days
    }
}

let countLeapYears = function(year, month){
    if (month < 3) year--
    return (Math.floor(year/4) - Math.floor(year/100) + Math.floor(year/400))
}

let countDaysOfThisYear = function(month, day){
    let count = 0
    for(let i=0;i<=month-2;i++){
        count+= daysPerMonth[i]
    }
    return count += day
}

let date1 = new date(result[0], result[1], result[2])
let date2 = new date(result[3], result[4], result[5])

console.log(Math.abs(date1.countDaysFromFirstDate - date2.countDaysFromFirstDate))