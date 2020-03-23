#!/usr/bin/env node

'use strict';

// このファイルを修正して、プルリクエストしてください。

const input = process.argv.slice(2);
const numberInput = input.map((item) => { return parseInt(item, 10); });
const monthDays = [31, 28, 31, 30, 31, 30,
    31, 31, 30, 31, 30, 31];
var countMonthDays = (month, date) => {
    for (let i = 0; i <= month - 2; i++) {
        date += monthDays[i];
    }
    return date;
}
var countLeapDays = (year, month) => {
    let relYear = month <= 2 ? year - 1 : year;
    return (Math.floor(relYear / 4) + Math.floor(relYear / 400) - Math.floor(relYear / 100));
}
class Date {
    constructor(year, month, day) {
        this.year = year;
        this.month = month;
        this.day = day;
    }
    get days() {
        let days = 365 * this.year + this.day;
        days = countMonthDays(this.month, days);
        days += countLeapDays(this.year, this.month);
        return days;
    }
}
var date1 = new Date(numberInput[0], numberInput[1], numberInput[2]);
var date2 = new Date(numberInput[3], numberInput[4], numberInput[5]);
console.log(Math.abs(date2.days - date1.days));