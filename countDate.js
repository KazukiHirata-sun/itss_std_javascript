'use strict';
const getday = (year, month, day) => {
  let days = 0
  const month31 = [1, 3, 5, 7, 8, 10, 12]
  const month30 = [4, 6, 9, 11]
  if(month31.indexOf(month) > -1) days = 31 - day
  else if (month30.indexOf(month) > -1) days = 30 - day
  else{
    if(year%4 == 0) days = 29 - day
    else days = 28 - day
  }
  return days
}
const y1 = parseInt(process.argv[2])
const m1 = parseInt(process.argv[3])
const d1 = parseInt(process.argv[4])
const y2 = parseInt(process.argv[5])
const m2 = parseInt(process.argv[6])
const d2 = parseInt(process.argv[7])
let years = y2 - y1 - 1
let leap_years = (years - years % 4)/4
let count = 0
if (years > 0){
  count = count + leap_years * 366 + (years - leap_years) * 365 + getday(y1,m1,d1) + d2
  for(let m = m1 +1; m <= 12; m++){
    count = count + getday(y1,m,0)
  }
  for(let m = 1; m < m2 ; m++){
    count = count + getday(y2,m,0)
  }
}else {
  if (m1 == m2) count = d2 - d1
  else{
    count = count + getday(y1,m1,d1) + d2
    for(let m = m1 + 1; m < m2; m++) count = count + getday(y1,m,0)
  }
}
console.log(count)