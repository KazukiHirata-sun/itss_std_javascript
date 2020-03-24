'use strict';


// このファイルを修正して、プルリクエストしてください。

var A = process.argv.slice(2);
for(var i=0; i<A.length; i++) {
    A[i] = parseInt(A[i]);
}
A = A.filter((n) => {
  if (n<2||n>20) return false
    else {
      for (var i = 2; i*i <= n; i++) {
        if (n % i === 0) return false;
      }
    }
  return true;
});
console.log(A);

var A = process.argv.slice(2);
A = A.map(Number);
var max = Math.max.apply(null,A);
var min = Math.min.apply(null,A);

function average(min, max) {
  if ((min + max) % 2 == 0) return (min + max) / 2;
  else return (min + max - 1) / 2;
}
var avg = average(min, max);
console.log(`${avg}`);
