// Bài 32: Kiểm tra các chữ số của số n có giảm dần hay không bằng Javascript

function checkDecreaseLeftToRight(n) {
    if(Number.parseInt(n / 10) === 0) {
        return true;
    }
    let t = n % 10;
    n = Number.parseInt(n / 10);
    do {
        if(n % 10 <= t) {
            return false;
        } 
        t = t % 10;
        n = Number.parseInt(n / 10);
    } while(n !== 0);
    return true;
}
console.log(checkDecreaseLeftToRight(123)); // false
console.log(checkDecreaseLeftToRight(321)); // true
console.log(checkDecreaseLeftToRight(1)); // true
console.log(checkDecreaseLeftToRight(11)); // false