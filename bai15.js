// Bài 15: Tính tổng tất cả các “ước số” của số ND n bằng Javascript

let n = 10;
sum = 1 + n;
for(let i = 2; i < n / 2; i++) {
    if(n % i == 0) {
        sum += i + n/i;
    }
}
console.log(sum);

// Output: 18 = 1 + 2 + 5 + 10