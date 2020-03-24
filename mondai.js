date = process.argv
y1 = parseInt(process.argv[2])
m1 = parseInt(process.argv[3])
d1 = parseInt(process.argv[4])
y2 = parseInt(process.argv[5])
m2 = parseInt(process.argv[6])
d2 = parseInt(process.argv[7])

function duration_of_month(month,year){
    if(month == 2){
        if(year%4==0){
            return 29
        }
        else{
            return 28
        }
    }
    else if(month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12){ 
        return 31 
    }
    else{
        return 30
    }
}

function duration_of_year(year){
    if(year%4==0) return 366;
    else return 365;
}

var duration = 0;

if(y1>y2){
    // console.log("y1 > y2")
    for(var i = m2 ; i <= 12 ; i++){
        duration += (duration_of_month(i,y2) - d2 )
        d2 = 0;
    }
    // console.log("Tinh Ngay Thua cua y1: ",duration);

    duration += d1;
    // console.log("duration = ",duration)
    for(var i = m1-1 ; i >=1 ; i-- ){
        duration += duration_of_month(i,y1)
        // console.log("duration = ",duration)
    }
    // console.log("Tinh Ngay Thua cua y2: ",duration);

    for(var i = y2 + 1 ; i < y1 ; i++){
        duration += duration_of_year(i)
    }
    // console.log("Xong ",duration);
}
else if(y2>y1){
    // console.log("y1 < y2")
    for(var i = m1 ; i <= 12 ; i++){
        duration += (duration_of_month(i,y1) - d1 )
        d1 = 0;
    }

    duration += d2;
    for(var i = m2-1 ; i >=1 ; i-- ){
        duration += duration_of_month(i,y2)
    }

    for(var i = y1 + 1 ; i < y2 ; i++){
        duration += duration_of_year(i)
    }
}
else{
    // console.log("y1 = y2")
    if(m1<m2){
        duration += d1
        for(var i = m1+1 ; i<m2; i++){
            duration += duration_of_month(i,y1)
        }
        duration += d2
    }
    else if(m2>m1){
        duration += d2
        for(var i = m2+1 ; i<m1; i++){
            duration += duration_of_month(i,y2)
        }
        duration += d1
    }
    else{
        duration = Math.abs(d1-d2)
    }
}

console.log(duration) 