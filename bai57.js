// Bài 57: Liệt kê vị trí các giá trị âm trong mảng một chiều các số thực

let a = [1, -2, 3, 4, -5, 6, 7, 8, 9];
a.forEach((t, index) => {
    if(t < 0) {
        console.log(index);
    }
})