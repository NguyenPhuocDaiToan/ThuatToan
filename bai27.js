// Bài 27: Đếm chữ số lớn nhất của số nguyên dương n bằng Javascript

let n = 97966386;
let max = -1;
let count = 1;
do {
    if(n % 10 === max) {
        count++;
    } else if(n % 10 > max) {
        max = n % 10;
        count = 1;
    } 
    n = Number.parseInt(n / 10);
} while(n !== 0);

console.log(count);
// Output: 2