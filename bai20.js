// Bài 20: Đếm số lượng chữ số của số nguyên dương n bằng Javascript
let n = 123456789;
let count = 0;
do {
    n = Number.parseInt(n / 10);
    count++;
} while(n !== 0);

console.log(count);

// Output: 9