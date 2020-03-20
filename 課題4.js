'use strict';


 class Date{
    constructor(y,m,d)
    {
        this.y=y;
        this.m=m;
        this.d=d;
    }
}

const dayOfMonth=[31, 28, 31, 30, 31, 30,
            31, 31, 30, 31, 30, 31];

var y1=parseInt(process.argv[2]),y2=parseInt(process.argv[5]);
var m1=parseInt(process.argv[3]),m2=parseInt(process.argv[6]);
var d1=parseInt(process.argv[4]),d2=parseInt(process.argv[7]);

var time1=new Date(y1,m1,d1);
var time2=new Date(y2,m2,d2);

function countLeapYear(y,m){
    if(m<=2){
        y--;
    }
    return Math.floor((y/4)-(y/100)+(y/400));
}


function getDistance(t1,t2)
{
    var n1=(t1.y*365+t1.d);
    var i;
    for(i=0;i<t1.m-1;i++)
    {
        n1+=dayOfMonth[i];
    }
    n1+=countLeapYear(t1.y,t1.m);

    var n2=t2.y*365+t2.d;
    var j;
    for(j=0;j<t2.m-1;j++)
    {
        n2+=dayOfMonth[j];
    }
    n2+=countLeapYear(t2.y,t2.m);

    return n2-n1;
}

console.log(getDistance(time1,time2));