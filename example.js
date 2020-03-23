#!/usr/bin/env node

'use strict';
var days_in_month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function isLeapYear(year)
{
  return ((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0);
}
class Date {
    constructor(y, m, d){
        this.d = parseInt(d);
        this.m = parseInt(m);
        this.y = parseInt(y);
    }
    getDate(){
        return `${this.y}/${this.m}/${this.d}`
    }
    countDaysFromZero(){
        //1年からこの年までのうるう年の数
        let count_leap_years = parseInt(this.y/4) - parseInt(this.y/100) + parseInt(this.y/400);
        //1年からこの年までの日数
        let days = (this.y-1)*365 + count_leap_years;
        for(let i=0;i<this.m-1;i++){
            // console.log('thang ' + i + ' - ' + days_in_month[i]);
            days += days_in_month[i];
        }
        if(isLeapYear(this.y) && this.m<=2) days--;
        days += this.d;
        return days;
    }
}

function daysBetweenTwoDates(date1, date2)
{
  return (date2.countDaysFromZero() - date1.countDaysFromZero());
}

// var date1 = new Date(process.argv[2], process.argv[3], process.argv[4]);
// var date2 = new Date(process.argv[5], process.argv[6], process.argv[7]);
var date1 = new Date(1998, 6, 16);
var date2 = new Date(2020, 3, 23);
console.log(date1.getDate());
console.log(date2.getDate());
console.log(date1.countDaysFromZero());
console.log(daysBetweenTwoDates(date1, date2));
