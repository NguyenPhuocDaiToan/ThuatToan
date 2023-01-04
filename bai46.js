// Bài 46: In ra cách đọc của một số nguyên dương có hai chữ số

let n = 90;
let firstNumber = Number.parseInt(n / 10);
let secondNumber = n % 10;

const numberTexts = ['', 'một', 'hai', 'ba','bốn', 'năm', 'sáu', 'bảy', 'tám', 'chín'];
if(secondNumber === 0) {
    if(firstNumber === 1) {
        console.log('mười nghìn');
    }
    else console.log(numberTexts[firstNumber] + ' mươi nghìn');
} else {
    if(firstNumber === 1) {
        console.log('mười ' + numberTexts[secondNumber] + ' nghìn');
    }
    else console.log(numberTexts[firstNumber] + ' mươi ' + numberTexts[secondNumber] + ' nghìn');
}