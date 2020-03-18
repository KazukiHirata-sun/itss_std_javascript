const arr = [123, 2, 121, 2, 23];
function SAPXEP(arr) {
    const len = arr.length;
    for (let i = 0; i < 5; i++) {
        for (let j = 1; j <= i; j++) {
            if (arr[j-1] > arr[j]) {
                let temp = arr[j-1];
                arr[j-1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}
console.log(SAPXEP(arr));
