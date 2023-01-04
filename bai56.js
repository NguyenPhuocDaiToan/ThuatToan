// Bài 56: Liệt kê các giá trị lẻ trong mảng các số nguyên

let a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
a.forEach(t => {
    if(t % 2 === 1) {
        console.log(t);
    }
})
