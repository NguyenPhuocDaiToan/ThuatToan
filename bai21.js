// Bài 21: Tính tích các chữ số của số nguyên dương n bằng Javascript

let n = 123456789;
let mul = 1;
do {
    mul *= n % 10;
    n = Number.parseInt(n / 10);
} while(n !== 0);

console.log(mul);

// Output: 1 . 2 ... 9 = 362880