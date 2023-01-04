// Bài 58: Bài 30: Đếm số nguyên tố có trong mảng một chiều các số nguyên

// Bài 57: Liệt kê vị trí các giá trị âm trong mảng một chiều các số thực

function checkIsPrime(n) {
    if(n < 2) {
        return false;
    } 
    for(let i = 2; i <= Math.sqrt(n); i++) {
        if(n % i === 0) {
            return false;
        }
    }
    return true;
}
let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
a.forEach(t => {
    if(checkIsPrime(t)) {
        console.log(t);
    }
})
