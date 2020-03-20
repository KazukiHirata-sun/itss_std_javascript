class day {
    constructor(y,m,d) {
        this.y = y;
        this.m = m;
        this.d = d;
    }
}
const daysPerMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

//ユーザーの入力したコマンドをy1とy2のコンストラクタに変更する。

var y1 = parseInt(process.argv[2]), m1 = parseInt(process.argv[3]), d1 = parseInt(process.argv[4]);
var y2 = parseInt(process.argv[5]), m2 = parseInt(process.argv[6]), d2 = parseInt(process.argv[7]);

var time1 = new day(y1, m1, d1);
var time2 = new day(y2, m2, d2);
//ーーーーーーーーーーーーーーーーーーーー
//うるう年の数を計算するのfunction

function countLeapYear(year) {
    if(year <= 2){
        year--;
    }
    return parseInt(year/4) + parseInt(year/400) - parseInt(year/100);
}

//日付の数を計算するのfunction

function dateCount(day1, day2) {
    var n1= (day1.y * 365 + day1.d);
    for(let i = 0;i < day1.m - 1; i++){
        n1+=daysPerMonth[i];
    }
    n1 += countLeapYear(day1.y, day1.m);

    var n2 = day2.y * 365 + day2.d;
    for(let j = 0; j < day2.m - 1; j++){
        n2 += daysPerMonth[j];
    }
    n2 += countLeapYear(day2.y,day2.m);

    return n2 - n1;
}

console.log(dateCount(time1,time2));