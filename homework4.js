'use strict';

// このファイルを修正して、プルリクエストしてください。 
let input = []

for (const arg of process.argv.slice(2)) {
    input.push(Number(arg));
}

const daysPerMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

var countLeapYears = (year, month) => {
    if (month <= 2) year--;
    return (Math.floor(year / 4) - Math.floor(year / 100) + Math.floor(year / 400));
}

var countDaysThisYear = (month, day, totalDays) => {
    for (let i = 0; i <= month - 2; i++) {
        totalDays += daysPerMonth[i];
    }
    totalDays += day;
    return totalDays;
}

class Date {
    constructor(year, month, day) {
        this.year = year;
        this.month = month;
        this.day = day;
    }
    get totalDays() {
        let totalDays = 365 * this.year;
        totalDays = countDaysThisYear(this.month, this.day, totalDays);
        totalDays += countLeapYears(this.year, this.month);
        return totalDays;
    }
}

var date1 = new Date(input[0], input[1], input[2]);
var date2 = new Date(input[3], input[4], input[5]);

console.log(Math.abs(date2.totalDays - date1.totalDays));
