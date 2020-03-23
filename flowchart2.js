'use strict'
const monthDays= Array(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31); 
var arr = Array();
class Date{
    constructor(year, month, day){
        this.day = day;
        this.month = month;
        this.year = year;
        this.totalday = 0;
    }
}
getNumber();

var date1 = new Date(arr[0],arr[1],arr[2]);
var date2 = new Date(arr[3],arr[4],arr[5]);
console.log(Math.abs(getTotalDay(date1) - getTotalDay(date2)));

//take in date from console
function getNumber(){
    for (var value of process.argv.slice(2)){
        arr.push(parseInt(value));
    }
}

function getTotalDay(date){

    var totalday = date.year*365 + date.day; 
    var years = date.year;
    var leapyear;

    //get days from months before present month
    for (var i=0; i<date.month - 1; i++){
        totalday += monthDays[i]; 
    }
    //find leapyear
    if (date.month <= 2) 
        years--;
    leapyear = Math.floor(years/4) - Math.floor(years/100) +  Math.floor(years/400);
    return (totalday+leapyear);
}
 
  






