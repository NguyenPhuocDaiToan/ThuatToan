// Bài 29: Kiểm tra số n có toàn chữ số lẻ hay không bằng Javascript

function checkOdd(n) {
    do {
        if(n % 10 % 2 === 0) {
            return false;
        }
        n = Number.parseInt(n / 10);
    } while(n != 0);
    return true;
}

console.log(checkOdd(99999)); // true
console.log(checkOdd(299999)); // false
