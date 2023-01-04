// Bài 26: Tìm chữ số nhỏ nhất của số nguyên dương n bằng Javascript

let n = 329168691;
let t = 9;
do {
    t = n % 10 < t ? n % 10 : t;
    if(t === 0) {
        break;
    }
    n = Number.parseInt(n / 10);
} while(n !== 0);
console.log(t);

// Output: 1