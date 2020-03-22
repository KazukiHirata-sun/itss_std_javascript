#!/usr/bin/env node

'use strict';

var year1 = parseInt(process.argv[2]);
var month1 = parseInt(process.argv[3]);
var date1 = parseInt(process.argv[4]);

var year2 = parseInt(process.argv[5]);
var month2 = parseInt(process.argv[6]);
var date2 = parseInt(process.argv[7]);

const dayofMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

const countLeafYear = (year, month) => {
  if (month <= 2) year--
  return parseInt(year/4) + parseInt(year/400) - parseInt(year/100);
}

const countTotalDay = (year, month, date) => {
  let days = 365*year + countLeafYear(year, month) + date;
  for (let i = 0; i < month - 1; i++) {
    days += dayofMonth[i];
  }
  return days;
}

console.log(Math.abs(countTotalDay(year1,month1,date1)-countTotalDay(year2,month2,date2)));