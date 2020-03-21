const dateOne = process.argv.slice(2, 5).map(el => Number(el))
const dateTwo = process.argv.slice(5).map(el => Number(el))

const months = [31, 28, 31, 30, 31, 31, 30, 31, 31, 30, 31, 30, 31]

// Count total bonus days in leaf years
const countLeafDays = (year, month) => {
  if (month <= 2) year--
  return Math.floor(year / 4 - year / 100 + year / 400)
}

// Count days from 1/1 in that years
const countDaysFrom11 = month => {
  let S = 0
  for (let i = 0; i < month - 1; i++) {
    S += months[i]
  }
  return S
}

// 
const totalDaysToDateOne = dateOne[0] * 365 + dateOne[2] + countLeafDays(dateOne[0], dateOne[1]) + countDaysFrom11(dateOne[1])
const totalDaysToDateTwo = dateTwo[0] * 365 + dateTwo[2] + countLeafDays(dateTwo[0], dateTwo[1]) + countDaysFrom11(dateTwo[1])

console.log(Math.abs(totalDaysToDateTwo - totalDaysToDateOne))