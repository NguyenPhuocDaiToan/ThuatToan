// Tính S(n) = 1^3 + 2^3 + … + N^3 bằng Javascript

// Cách 1: công thức: S(đề) =  (1 + 2 + 3 +... + n)^2
// => S = [n.(n+1)/2]^2= (n * n + n)^2 / 4;

let n = 10;
let s = (n * n + n) * (n * n + n) / 4;
console.log(s);

// Cách 2: dùng for
let s1 = 0;
for(let i = 1; i <= n; i++) {
    s1 += Math.pow(i, 3);
}
console.log(s1);

// Output: 3025