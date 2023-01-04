// Bài 43: Chương trình tìm số ngày trong tháng bằng Javascript
let dayOfMonths = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

let month = 3;
if(month === 2) {
    console.log(`Tháng ${month} có ${dayOfMonths[month]} hoặc ${dayOfMonths[month] + 1} ngày`);
} else {
    console.log(`Tháng ${month} có ${dayOfMonths[month]} ngày`);
}