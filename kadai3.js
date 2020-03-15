var Array = process.argv.slice(2);

Array = Array.filter((n) => {
  if (n<2) return true
    else {
      for (var i = 2; i*i <= n; i++) {
        if (n % i === 0) return false;
      }
    }
  return true;
});
console.log(Array);
