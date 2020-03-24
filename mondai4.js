var res = []

if (process.argv.length != 8) {
    console.log("Usage: node mondai4.js 2019 02 02 2020 02 02")
    process.exit(-1)
}

for (const arg of process.argv.slice(2)) {
    res.push(parseInt(arg))
}

var date1 = new Date(res[0], res[1], res[2])
var date2 = new Date(res[3], res[4], res[5])

console.log((parseInt(date2 - date1)/(24 * 60 * 60 * 1000)))