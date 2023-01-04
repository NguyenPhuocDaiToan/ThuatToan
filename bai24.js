// Bài 24: Tìm chữ số đầu tiên của số nguyên dương n bằng Javascript

let n = 123456789;
// Cách 1:
console.log(n.toString()[0]);
// Cách 2:
let first = 0;
do {
    first = n % 10;
} while(n = Number.parseInt(n / 10));
console.log(first);
// Output: 1