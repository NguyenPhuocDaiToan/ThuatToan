// Bài 25: Tìm chữ số lớn nhất của số nguyên dương n bằng Javascript

let n = 686033868;
let t = 0;
do {
    t = n % 10 > t ? n % 10 : t;
    if(t === 9) {
        break;
    }
    n = Number.parseInt(n / 10);
} while(n !== 0);
console.log(t);

// Output: 8