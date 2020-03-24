var myArgs = process.argv.slice(2);

const year1 = Number(myArgs[0]);
const month1 = Number(myArgs[1]);
const day1 = Number(myArgs[2]);

const year2 = Number(myArgs[3]);
const month2 = Number(myArgs[4]);
const day2 = Number(myArgs[5]);

var date1 = new Date(`${month1}/${day1}/${year1}`); 
var date2 = new Date(`${month2}/${day2}/${year2}`); 

var Difference_In_Time = date2.getTime() - date1.getTime(); 
  
var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24); 

console.log(Difference_In_Days);

