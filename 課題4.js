#!/usr/bin/env node

'use strict';
function changeMonthToDay(month)
{
    switch(month)
    {
        case 1: return 0;
        case 2: return 31;
        case 3: return 59;
        case 4: return 90;
        case 5: return 120;
        case 6: return 151;
        case 7: return 181;
        case 8: return 212;
        case 9: return 243;
        case 10: return 273;
        case 11: return 304;
        case 12: return 334;

    }
}
var y1=Number(process.argv[2]);
var m1=Number(process.argv[3]);
var d1=Number(process.argv[4]);
var y2=Number(process.argv[5]);
var m2=Number(process.argv[6]);
var d2=Number(process.argv[7]);
var y1c=parseInt(y1/4),y2c=parseInt(y2/4);
var du1=y1 % 4;
var du2=y2 % 4;
if((m1>2 && du1==0)|| (du1!=0)) allday1=y1c+y1*365+changeMonthToDay(m1)+d1;
else var allday1=y1c-1+y1*365+changeMonthToDay(m1)+d1;
if((m2>2 && du2==0) || (du2!=0)) allday2=y2c+y2*365+changeMonthToDay(m2)+d2;
else var allday2=y2c-1+y2*365+changeMonthToDay(m2)+d2;
console.log(allday2-allday1);
