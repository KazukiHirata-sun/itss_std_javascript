#!/usr/bin/env node

'use strict';

// このファイルを修正して、プルリクエストしてください。

/**
 * 課題4
 * 名前：グェン・アィン・トゥーン
 *　学籍番号： 20164470
 */

// SUPPORT FUNCTIONS AND CLASS PATH

const thirty_one_days_months = [1, 3, 5, 7, 8, 10, 12];
const thirty_days_months = [4, 6, 9, 11];
class MyDate {
  constructor(day, month, year) {
    this.day = parseInt(day);
    this.month = parseInt(month);
    this.year = parseInt(year);

    this.originalDay = 1;
    this.originalMonth = 1;
    this.originalYear = 0;
  }

  getDaysOffsetFromOrigin() {
    const daysOffsetFromOrigin = this.getDaysFromOriginalDateToDateYear();
    const remainDaysOfYear = this.getRemainDaysOfYear();
    return remainDaysOfYear + daysOffsetFromOrigin;
  }

  getDaysFromOriginalDateToDateYear() {
    const yearsOffset = this.getYearsFromOriginalDateToDateYear();
    const leapYears = this.getLeapYearsFromOriginalDateToDateYear(yearsOffset);
    return leapYears*366 + (yearsOffset - leapYears)*365;
  }

  getYearsFromOriginalDateToDateYear() {
    return this.year - this.originalYear - 1;
  }

  getLeapYearsFromOriginalDateToDateYear(yearsOffset) {
    return parseInt(yearsOffset/4) - parseInt(yearsOffset/100) + parseInt(yearsOffset/400); 
  }

  getRemainDaysOfYear(){
    let remainDays = this.day;
    let m;
    for (m = 1; m < this.month; m++) {
      if (thirty_one_days_months.includes(m)) {
        remainDays += 31;
      } else if (thirty_days_months.includes(m)) {
        remainDays += 30;
      }
    }

    if (m >= 2) {
      if(this.isLeapYear())
        remainDays += 29;
      else
        remainDays += 28;
    }
    return remainDays;
  }

  isLeapYear(){
    return (this.year%4 == 0) && ((this.year%100 != 0) || (year % 400 == 0));  
  }

  isValidateDate(){
    if(this.year < 0 || this.day < 1 || this.month < 1 || 
      (thirty_one_days_months.includes(this.month) && this.day > 31) ||
      (thirty_days_months.includes(this.month) && this.day > 30) ||
      (this.isLeapYear() && this.month === 2 && this.day > 29) ||
      (!this.isLeapYear() && this.month === 2 && this.day > 28))  
      return false;
    else   
      return true;
  }
}

var getDifferentDays = (date1, date2) => {
  if (!date1.isValidateDate() || !date2.isValidateDate())
    throw 'Input dates not valid';
  return Math.abs(date1.getDaysOffsetFromOrigin() - date2.getDaysOffsetFromOrigin());
}

// MAIN PATH
const date1 = new MyDate(process.argv[4], process.argv[3], process.argv[2]);
const date2 = new MyDate(process.argv[7], process.argv[6], process.argv[5]);

const differentDays = getDifferentDays(date1, date2);

console.log(differentDays);
