#!/usr/bin/env node

'use strict';
//ブイ・ゴック・トゥー　20164453　（木２）

// このファイルを修正して、プルリクエストしてください。
const monthDays= Array(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31); 
var arr = Array();
class Date{
    constructor(year, month, day){
        this.day = day;
        this.month = month;
        this.year = year;
        this.totalday = 0;
    }

    getTotalDay(){
        this.totalday =this.year*365 +this.day; 
        var years =this.year;
        var leapyear;

        //get days from months before present month
        for (let i=0; i<this.month - 1; i++){
            this.totalday += monthDays[i];
        }
        //find leapyear
        if (this.month <= 2) 
            years--;
        leapyear = Math.floor(years/4) - Math.floor(years/100) +  Math.floor(years/400);
        return(this.totalday += leapyear); 
    }
}
getNumber();

var date1 = new Date(arr[0],arr[1],arr[2]);
var date2 = new Date(arr[3],arr[4],arr[5]);

console.log(Math.abs(date1.getTotalDay() - date2.getTotalDay()));

//take in date from console
function getNumber(){
    for (let dif of process.argv.slice(2)){
        arr.push(parseInt(dif));
    }
}