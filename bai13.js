// Bài 13: Tính S(n) = x^2 + x^4 + … + x^2n bằng Javascript
let n = 10;
let x = 2;
let t = 1;
let sum = 0;
for(let i = 1; i <= n; i++) {
    t = t * x * x;
    sum += t;
}
console.log(sum);
// Output: 1398100