// Bài 47: In ra cách đọc của một số nguyên dương có ba chữ số

let n = 113;
let firstNumber = Number.parseInt(n / 100);
let secondNumber = Number.parseInt(n / 10) % 10;
let thirdNumber = n % 10;

const numberTexts = ['', 'một', 'hai', 'ba','bốn', 'năm', 'sáu', 'bảy', 'tám', 'chín'];

// 102: một trăm lẻ hai nghìn
// 130: một trăm ba mươi nghìn
// 100: một trăm nghìn
// 113: một trăm mười ba nghìn
if(thirdNumber === 0) {
    if(secondNumber === 0) {
        console.log(numberTexts[firstNumber] + ' trăm nghìn');
    } else if(secondNumber === 1) {
        console.log(numberTexts[firstNumber] + ' trăm mười nghìn');
    } else  {
        console.log(numberTexts[firstNumber] + ' trăm ' + numberTexts[secondNumber] + ' mươi nghìn');
    }
} else {
    if(secondNumber === 0) {
        console.log(numberTexts[firstNumber] + ' trăm lẻ ' + numberTexts[thirdNumber] + ' nghìn');
    } else if(secondNumber === 1) {
        console.log(numberTexts[firstNumber] + ' trăm mười ' + numberTexts[thirdNumber] + ' nghìn');
    } else {
        console.log(numberTexts[firstNumber] + ' trăm ' + numberTexts[secondNumber] + ' mươi ' + numberTexts[thirdNumber] + ' nghìn');
    }
}
