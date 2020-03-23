#!/usr/bin/env node

'use strict';

// このファイルを修正して、プルリクエストしてください。
let d1 = {
    year: parseInt(process.argv[2]),
    month: parseInt(process.argv[3]),
    day: parseInt(process.argv[4])
  }
  
  let d2 = {
    year: parseInt(process.argv[5]),
    month: parseInt(process.argv[6]),
    day: parseInt(process.argv[7])
  }
  const day=[31, 28, 31, 30, 31, 30,
    31, 31, 30, 31, 30, 31];
// うるう年を数える
const LeafYear = (year, month) => {
    if (month <= 2) year--;
    return parseInt(year/4) + parseInt(year/400) - parseInt(year/100);
  }
const DistanceDay = (year, month, date) => {
    let days = 365*year + LeafYear(year, month) + date;
    for (let i = 0; i < month - 1; i++) {
      days += day[i];
    }
    return days;
  }
  console.log(Math.abs(DistanceDay(d2.year,d2.month,d2.day)-DistanceDay(d1.year,d1.month,d1.day)));