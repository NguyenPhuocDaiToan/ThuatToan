// Bài 49: Tìm phần tử lớn nhất trong mảng một chiều bằng Javascript

let arr = [1, 5, 9, 12, 6, 30, 6, 99, 30, 12];

let max = arr[0];
let length = arr.length;
for(let i = 1; i < length; i++) {
    if(arr[i] > max) {
        max = arr[i];
    }
}
console.log(max);