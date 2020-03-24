#!/usr/bin/env node
'use strict';
// 文字列を変数に代入
//example 2011 12 30 2022 11 3

let result = []

for (const arg of process.argv.slice(2)) {
    result.push(parseInt(arg))
}

let year1 = {
    year: result[0],
    month: result[1],
    day: result[2],
}

let year2 = {
    year: result[3],
    month: result[4],
    day: result[5],
}

const daysPerMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

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

let date1 = new date(year1.year, year1.month, year1.day)
let date2 = new date(year2.year, year2.month, year2.day)

console.log(Math.abs(date1.countDaysFromFirstDate - date2.countDaysFromFirstDate))