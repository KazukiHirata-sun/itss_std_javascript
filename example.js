#!/usr/bin/env node

'use strict';
function checkyear(y){
    if(y % 4 === 0)
    return 366;
    else
    return 365;
}
function checkm(m,y){
    if( m == 1 || m==3 || m==5 || m == 7|| m ==8||m==10||m==12)
    return 31;
    if( m == 4 || m== 6|| m== 9 || m == 11)
    return 30;
    if(m == 2 && y%4 ===0) return 29;
    if(m == 2 && y%4 !==0) return 28;
}
function sumy(y0,y, m, d){
    let sumy =0;
    for(let i =1; i < m; i++ ){
        sumy = sumy + checkm(i,y);
    }
    sumy = sumy + d;
    if( y == y0)
    return sumy;
    else {
        for (let i = y0 ; i < y; i++){
         sumy = sumy + checkyear(i);
        }
        return sumy;
    }
}

let sum =0;
if(process.argv.length != 8 ){
    console.log("Nhap sai dinh dang!\n");
}else {
    const y1 = parseInt(process.argv[2]);
    const m1 = parseInt(process.argv[3]);
    const d1 = parseInt(process.argv[4]);
    const y2 = parseInt(process.argv[5]);
    const m2 = parseInt(process.argv[6]);
    const d2 = parseInt(process.argv[7]);
    //console.log (process.argv[2].parseInt);
    if( m1> 12 || m2 > 12 || m1 < 1 || m2< 1 || d1< 1 || d2< 1 && d1>checkm(m1,y1) && d2 >checkm(m2,y2) ){
        console.log("Nhap sai dinh dang!\n");
        return 0;
    }
    
    if(y2>= y1)
    sum = sumy(y1,y2,m2,d2) - sumy(y1,y1,m1,d1);
    else sum = sumy(y2,y1,m1,d1) - sumy(y2,y2,m2,d2);
    
    console.log(sum);
    
       
}

// このファイルを修正して、プルリクエストしてください。
/* week1 bai 1
let temp =[] ;
for( let i = 2; i<process.argv.length; i++){
    temp.push(process.argv[i]);
}
for(let i = temp.length-1; i >=0; i--){
    console.log((i+1)+"番目は"+temp[i]+"です。");
    
}*/