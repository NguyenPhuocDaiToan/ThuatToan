// Bài 45: Nhập vào ngày tháng năm rồi in ra ngày tháng năm trước đó 

let day = 12;
let month = 4;
let year = 2013;
console.log(`Ngày trước của ${day}/${month}/${year} là: `);
if(day === 1) {
    if(month === 1) {
        day= 31;
        month = 12;
        year--;
    } else {
        if(month === 3) {
            if(year % 400 === 0 || year % 4 === 0 && year % 100 !== 0) {
                day = 29
            } else {
                day = 28;
            }
        } else if(month === 5 || month === 7 || month === 8 || month === 10 || month === 12) {
            day = 30;
        } else {
            day = 31;
        }
        month--;
    }
    
} else {
    day--;
}
console.log(`${day}/${month}/${year}`);