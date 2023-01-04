// Bài 44: Nhập vào ngày tháng năm rồi in ra ngày tiếp theo

let day = 28;
let month = 2;
let year = 2012;
let dayOfMonths = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
console.log(`Ngày tiếp theo của ${day}/${month}/${year} là: `);
if(day === dayOfMonths[month]) {
    if(month === 12) {
        day = month = 1;
        year++;
    } else if(year % 400 === 0 || year % 4 === 0 && year % 100 !== 0) {
        day = 29;
    } else {
        day = 1;
        month++;
    }
} else if(day === 29 && month === 2) {
    day = 1;
    month++;
} else {
    day++;
}
console.log(`${day}/${month}/${year}`);
