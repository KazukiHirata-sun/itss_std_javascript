#!/usr/bin/env node

'use strict';

// このファイルを修正して、プルリクエストしてください。

/**
 * 課題３
 * 名前：グェン・アィン・トゥーン
 *　学籍番号： 20164470
 */

const primeNumberFilter = (inputNumbers) => {
  let primeNumbers = [];

  inputNumbers.forEach(number => {
    if(number < 2)
      return;
    else {
      let i = 2;
      do {
        if (i == number) {
          primeNumbers.push(number);
          return;
        } else if (number % i == 0) {
          return;
        } else {
          i += 1;
        }
      } while (i <= number);
    }
    return; 
  });

  return primeNumbers;
}

const primeNumbers = primeNumberFilter(process.argv.slice(2));
console.log(primeNumbers);


