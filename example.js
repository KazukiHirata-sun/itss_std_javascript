'use strict';

// このファイルを修正して、プルリクエストしてください。
let array = [];
const n = process.argv.length
for (let i = 2; i < n; i++) {
let y1 = Number(process.argv[2]);
let m1 = Number(process.argv[3]);
let d1 = Number(process.argv[4]);
let y2 = Number(process.argv[5]);
let m2 = Number(process.argv[6]);
let d2 = Number(process.argv[7]);

    let tmp = Number(process.argv[i]);
    if (isNaN(tmp)) {
        console.log(`${process.argv[i]} - 数字ではない`);
function daybw(y1, m1, d1, y2, m2, d2) {
    let t = 0;
    while (y1 <= y2) {
        if (y1 == y2 && m1 == m2) {
            t += d2 - d1;
            break;
        } else {
            // m4  m6  m9 m11: 30day
            if (m1 == 4 || m1 == 6 || m1 == 9 || m1 == 11) {
                t += 30 - d1;
            }
            if (m1 == 1 || m1 == 3 || m1 == 5 || m1 == 7 || m1 == 8 || m1 == 10 || m1 == 12) {
                t += 31 - d1;
            }

    } else {
        array.push(tmp);
        array.sort(function(a, b) { return a - b });
            if (m1 == 2) {
                if (((y1 % 4 == 0) && (y1 % 100 != 0)) || (y1 % 400 == 0)) {
                    t += 29 - d1;
                } else t += 28 - d1;
            }
            m1++;
            d1 = 0;
            if (m1 == 13) {
                y1 += 1;
                m1 = 1;
            }
        }
    }
    //array.sort();
    return t;

}
console.log(array); 

let day_bw = daybw(y1, m1, d1, y2, m2, d2);
console.log(day_bw); 
