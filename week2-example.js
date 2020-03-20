'use strict'
/* JavaScript trick
let date1 = new Date(process.argv[2], process.argv[3], process.argv[4])
let date2 = new Date(process.argv[5], process.argv[6], process.argv[7])

console.log((date2 - date1)/(1000 * 3600 * 24))
*/
// Clear way
const monthDays = [31,28,31,30,31,30,31,31,30,31,30,31]

const countLeapYear = (date) => {
  let years = date.year
  if (date.month <= 2) years--
  return parseInt(years/4) - parseInt(years/100) + parseInt(years/400)
}

const getDays = (date) => {
  let n = date.year*365 + date.day
  for (let i = 0; i < date.month - 1; i++) n += monthDays[i]
  n += countLeapYear(date)
  return n
}

const getDiff = (date1, date2) => {
  return getDays(date2) - getDays(date1)
}

let d1 = {
  year: parseInt(process.argv[2]),
  month: parseInt(process.argv[3]),
  day: parseInt(process.argv[4])
}

let d2 = {
  year: parseInt(process.argv[5]),
  month: parseInt(process.argv[6]),
  day: parseInt(process.argv[7])
}

console.log(getDiff(d1,d2))
