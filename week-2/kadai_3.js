const isPrimeNumber = number => {
  if(number === 1) return false
  if(number === 2) return true
  for(let i = 2; i <= Math.floor(Math.sqrt(number)); i++) {
    if(number % i === 0) return false
  }
  return true
}

const originalData = process.argv.slice(2)

let outputData = []

for(const element of originalData) {
  if(isPrimeNumber(element)) outputData.push(Number(element))
}

console.log(outputData)