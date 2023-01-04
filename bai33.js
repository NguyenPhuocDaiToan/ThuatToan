// Bài 33: Tính S(x, n) = x – x^2 + x^3 + … + (-1)^n+1 * x^n bằng Javascript
let x = 2;
let n = 10;
let sum = 0;
let t = 1;
for(let i = 1; i <= n; i++) {
    t *= x;
    // sum = sum + (i % 2 === 0 ? -t : t);
    sum += t * Math.pow(-1, i + 1);
}
console.log(sum);

// Output: -682