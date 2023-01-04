// Bài 55: Liệt kê các giá trị chẵn trong mảng các số nguyên 

let a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
a.forEach(t => {
    if(t % 2 === 0) {
        console.log(t);
    }
})
