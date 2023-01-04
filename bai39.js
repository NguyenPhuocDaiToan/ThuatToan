// Bài 39: Tính tổng các giá trị lẻ nguyên dương nhỏ hơn N bằng Javascript
let n = 100;
let sum = 0;
for(let i = 1; i <= n; i += 2) {
    sum += i;
}
console.log(sum);
// Output: 2500