// Bài 30: Kiểm tra số n có toàn chữ số chẵn hay không bằng Javascript

function checkEven(n) {
    do {
        if(n % 10 % 2 === 1) {
            return false;
        }
        n = Number.parseInt(n / 10);
    } while(n != 0);
    return true;
}

console.log(checkEven(222222)); // true
console.log(checkEven(222229)); // false
