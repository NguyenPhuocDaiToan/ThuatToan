// Bài 37: Tìm số nguyên dương n nhỏ nhất sao cho 1 + 2 + … + n > 10000

// Công thức: n(n+1)/2 > 10000 => n(n+1) > 20000
let i = 1;
while(i * (i + 1) <= 20000) {
    i++;
}
console.log(i);

// dùng biến tạm
let temp = 0;
let j = 0;
while(temp <= 10000) {
    j++;
    temp += j;
}
console.log(j);

// Output: 141