#!/usr/bin/env node

"use strict";

var params = process.argv.slice(2).map(element => parseInt(element));

const days = [null, 31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const milisecondOfDay = 1000 * 60 * 60 * 24;

if (validateDates(params)) {
  var date1 = new Date(params[0], params[1], params[2]);
  var date2 = new Date(params[3], params[4], params[5]);
  var period1 = date1.getTime();
  var period2 = date2.getTime(); 
  var differenceInMillisecond = period2 - period1;

  
  console.log(differenceInMillisecond / milisecondOfDay);
} else {
  console.log("無効な日付");
}

function validateDates(params) {
  return (
    checkValidateDate(params[0], params[1], params[2]) &&
    checkValidateDate(params[3], params[4], params[5])
  );
}

function checkValidateDate(year, month, day) {
  if (month > 12) return false;
  if (month == 2) {
    if(year % 100 == 0)
      var dayOfMonth = year % 400 == 0 ? 29 : 28;
      else 
      var dayOfMonth = year % 4 == 0 ? 29 : 28;
  } else {
    var dayOfMonth = days[month];
  }
  return day <= dayOfMonth;
}