// Bài 22: Đếm số lượng chữ số lẻ của số nguyên dương n bằng Javascript
let n = 123456789;
let count = 0;
do {
    if(n % 10 % 2 === 1) {
        count++;
    }
    n = Number.parseInt(n / 10);
} while(n !== 0);

console.log(count);
// Output: 1 3 5 7 9 => 5