const isPrimeNumber = number => {
  if(number === 1) return false
  if(number === 2) return true
  for(let i = 2; i <= Math.floor(Math.sqrt(number)); i++) {
    if(number % i === 0) return false
  }
  return true
}

console.log(process.argv.slice(2).map(el => Number(el)).filter(isPrimeNumber))