// Bài 28: Đếm chữ số nhỏ nhất của số nguyên dương n bằng Javascript

let n = 879323239;
let min = 10;
let count = 1;
do {
    if(n % 10 === min) {
        count++;
    } else if(n % 10 < min) {
        min = n % 10;
        count = 1;
    } 
    n = Number.parseInt(n / 10);
} while(n !== 0);

console.log(count);
// Output: 2 (có 2 số 2)