#!/usr/bin/env node

'use strict';

// このファイルを修正して、プルリクエストしてください。

// うるう年のチェク
function checkLeapYear(year){
    if ((year % 4===0 &&year%100 !==0 && year % 400 !==0)||(year%100===0 && year % 400===0)){
        return true
    } else return false
}

// 「yyyy mm dd」日付形式のチェク
function checkDateFormat(year,month,day){
    if(month<1 || month>12) return false
    if(checkLeapYear(year)){
        let ListofDays = [31,29,31,30,31,30,31,31,30,31,30,31];
        if(day<1||day>ListofDays[month-1]) return false
    }else{
        let ListofDays = [31,28,31,30,31,30,31,31,30,31,30,31];
        if(day<1||day>ListofDays[month-1]) return false
    }
    return true;
}

function checkArg() {
    if(process.argv.length!= 8) return false;
    if(checkDateFormat(process.argv[2],process.argv[3],process.argv[4])!==true) return false;
    if(checkDateFormat(process.argv[5],process.argv[6],process.argv[7])!==true) return false;
    return true
}

function diffDay(){
    if(checkArg()){
        const date1 = new Date(process.argv[2],process.argv[3],process.argv[4]);
        const date2 = new Date(process.argv[5],process.argv[6],process.argv[7]);
        const diffTime = Math.abs(date2 - date1);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
        console.log(diffDays)
    }else console.log("コマンドライン引数をチェクしてください！")
}
diffDay()