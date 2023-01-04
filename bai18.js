//Bài 18: Tính tổng tất cả các ước số chẵn của số nguyên dương n bằng Javascript

let n = 100;
let sum = n % 2 === 0 ? n : 0;
for(let i = 2; i <= n / 2; i += 2) {
    if(n % i == 0) {
        console.log(i);
        sum += i;
    }
}
console.log(sum);
// Output: 2 4 10 20 50 100 => 186