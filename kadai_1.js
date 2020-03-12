const printElement = ({ value, position }) => console.log(`${position}番目は${value}です`)

const inputStringArray = process.argv.slice(2).map(el => ({ value: el, position: process.argv.slice(2).indexOf(el) + 1 }))

for (const data of inputStringArray.reverse()) {
  printElement(data)
}