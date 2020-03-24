#!/usr/bin/env node

"use strict";

var params = process.argv.slice(2).map(element => parseInt(element));

/* １ヶ月の日 */
const days = [null, 31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

/* １日のミリセカント */
const milisecondOfDay = 1000 * 60 * 60 * 24;

if (validateDates(params)) {
  var date1 = new Date(params[0], params[1], params[2]);
  var date2 = new Date(params[3], params[4], params[5]);

  /* 1970年1月1日から日付1までのミリセカンド */
  var period1 = date1.getTime();
  /* 1970年1月1日から日付2までのミリセカンド */
  var period2 = date2.getTime();

  /* ミリセカンドで日付の２つの差 */
  var differenceInMillisecond = period2 - period1;

  /* 日数を出力 */
  console.log(differenceInMillisecond / milisecondOfDay);
} else {
  console.log("無効な日付");
}

/*　パラメータが正しいかどうか確認 */
function validateDates(params) {
  return (
    checkValidateDate(params[0], params[1], params[2]) &&
    checkValidateDate(params[3], params[4], params[5])
  );
}

/* １日付が正しいかどうか確認 */
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
