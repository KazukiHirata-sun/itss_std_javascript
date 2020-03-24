"use strict";

var arrInput = process.argv.slice(2)[0];
var number1 = [];
var number2 = [];
var number3 = [];
var mark = 0;

var numberResolved = (numberIndex, array) => {
  let a = array.slice();
  for (let k = 0; k < a.length; k++) {
    if (a[k] === "X") {
      a[k] = numberIndex;
    }
  }
  const arrNew = a.reverse();
  let result = 0;
  for (let m = 0; m < arrNew.length; m++) {
    result += arrNew[m] * 10 ** m;
  }
  return result;
};

for (let i = 0; i < arrInput.length; i++) {
  if (arrInput[i] === "+") {
    mark += 1;
    continue;
  }
  if (arrInput[i] === "=") {
    mark += 2;
    continue;
  }

  if (mark === 0) {
    number1.push(arrInput[i]);
  } else if (mark === 1) {
    number2.push(arrInput[i]);
  } else {
    number3.push(arrInput[i]);
  }
}

var t = 0;
for (let j = 0; j <= 9; j++) {
  let numberResolved1 = numberResolved(j, number1);
  let numberResolved2 = numberResolved(j, number2);
  let numberResolved3 = numberResolved(j, number3);
    if (numberResolved1 + numberResolved2 === numberResolved3) {
      console.log(j);
      t++;
      break;
    }
}
if(t === 0) console.log('NaN')
