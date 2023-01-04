//  Tính tổng các giá trị âm trong mảng một chiều các số thực

let a = [1, 2, 3, 4, 5, -6, 7, -8, 9, -10, 11, -12, 13, 14];
let sum = 0;
a.forEach(t => {
    if(t < 0) {
        sum += t;
    }
});
console.log(sum);