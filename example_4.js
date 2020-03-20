#!/usr/bin/env node

'use strict';

// クラスを作成する
// y, m, d は 年、月、日 に対応する
class Date {
    constructor(y,m,d) {
        this.y = y;
        this.m = m;
        this.d = d;
    }
}

// リストの各値は月の日に対応する
const dayOfMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

// コンソール引数からデータを取り出す
// Console Command : [0]-node [1]-example_4.js [2]-YYYY [3]-MM [4]-DD [5]-YYYY [6]-MM [7]-DD
var y1 = parseInt(process.argv[2]), m1 = parseInt(process.argv[3]), d1 = parseInt(process.argv[4]);
var y2 = parseInt(process.argv[5]), m2 = parseInt(process.argv[6]), d2 = parseInt(process.argv[7]);

// Dateクラスからtime1とtime2のオブジェックを生成する
var time1 = new Date(y1, m1, d1);
var time2 = new Date(y2, m2, d2);

// うるう日を計算する
function countLeapYear(year) {
    if(year <= 2){
        year--;
    }
    // 100で割り切れる年はうるう年ではない、
    // しかし、400で割り切れる年はうるう年だ
    return parseInt(year/4) + parseInt(year/400) - parseInt(year/100);
}

function dateDiff(date1, date2) {
    // 0年から Date1 までの日数を計算する
    var n1= (date1.y * 365 + date1.d);
    for(let i = 0;i < date1.m - 1; i++){
        n1+=dayOfMondateh[i];
    }
    n1 += countLeapYear(date1.y, date1.m);

    // 0年から Date2 までの日数を計算する
    var n2 = date2.y * 365 + date2.d;
    for(let j = 0; j < date2.m - 1; j++){
        n2 += dayOfMonth[j];
    }
    n2 += countLeapYear(date2.y,date2.m);

    return n2 - n1;
}

console.log(dateDiff(time1,time2));