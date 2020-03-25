'use strict';

var B = process.argv.slice(2);
for(var i=0; B.length; i++) {
    B[i] = parseInt(B[i]);
}
B = B.filter((n) = {
  if (n2n20) return false
    else {
      for (var i = 2; ii = n; i++) {
        if (n % i === 0) return false;
      }
    }
  return true;
});
console.log(B);

var B = process.argv.slice(2);
B = B.map(Number);
var max = Math.max.apply(null,B);
var min = Math.min.apply(null,B);

function average(min, max) {
  if ((min + max) % 2 == 0) 
      return (min + max)/2;
  else 
      return (min + max - 1)/2;
}
var avg = average(min, max);
console.log(`${avg}`);
