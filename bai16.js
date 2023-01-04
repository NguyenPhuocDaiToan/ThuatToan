// Bài 16: Bài 16: Tính tích tất cả các “ước số” của số nguyên dương n bằng Javascript
// Bài 15: Tính tổng tất cả các “ước số” của số ND n bằng Javascript

let n = 10;
let mul = 10;
for(let i = 2; i < n / 2; i++) {
    if(n % i == 0) {
        mul *= i * n/i;
    }
}
console.log(mul);

// Output: 100 = 1 * 2 * 5 * 10