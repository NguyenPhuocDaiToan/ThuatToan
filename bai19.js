// Bài 19: Tìm ước số lẻ lớn nhất của số nguyên dương n bằng Javascript

let n = 1200;
if(n % 2 === 1) {
    console.log(n);
} else {
    let i = n / 2 % 2 === 0 ? n / 2 - 1: n / 2;
    for(; i >= 1; i -= 2) {
        if(n % i === 0) {
            console.log(i);
            break;
        }
    }
}

// Output: 75