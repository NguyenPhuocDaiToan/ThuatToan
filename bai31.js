// Bài 31: Kiểm tra các chữ số của số n có tăng dần từ trái sang phải không bằng Javascript

function checkIncreaseLeftToRight(n) {
    if(n / 10 === 0) {
        return true;
    }
    let t = n % 10;
    n = Number.parseInt(n / 10);
    do {
        if(n % 10 >= t) {
            return false;
        } 
        t = t % 10;
        n = Number.parseInt(n / 10);
    } while(n !== 0);
    return true;
}
console.log(checkIncreaseLeftToRight(123)); // true
console.log(checkIncreaseLeftToRight(132)); // false
console.log(checkIncreaseLeftToRight(1)); // true
console.log(checkIncreaseLeftToRight(11)); // false