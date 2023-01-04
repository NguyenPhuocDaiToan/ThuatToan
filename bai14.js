// Tính S(n) = x + x^3 + x^5 + … + x^(2n - 1) bằng Javascript

let x = 2;
let n = 10;
let t = x;
let sum = 0;
for(let i = 1; i <= n; i++) {
    sum += t;
    t = t * x * x;
}
console.log(sum);

// Output: 699050