// Bài 23: Tính tổng các chữ số chẵn của số nguyên dương n bằng Javascriptlet n = 123456789;
let n = 123456789;
let sum = 0;
do {
    if(n % 10 % 2 === 0) {
        sum += n % 10;
    }
    n = Number.parseInt(n / 10);
} while(n !== 0);

console.log(sum);
// Output: 2 + 4 + 6 + 8 => 20