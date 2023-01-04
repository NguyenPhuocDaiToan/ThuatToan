// Bài 17: Liệt kê tất cả các ước số lẻ của số nguyên dương n bằng Javascript
let n = 99;

for(let i = 1; i <= n/ 2; i += 2) {
    if(n % i === 0 && i % 2 === 1) {
        console.log(i);
    }
}
if(n % 2 === 1) {
    console.log(n);
}
// Output: 1 3 9 11 33 99