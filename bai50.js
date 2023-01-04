// Bài 50: Tìm phần tử nhỏ nhất trong mảng một chiều 

let arr = [1, 5, 9, 12, 6, 30, 0, 99, 30, 12];

let min = arr[0];
let length = arr.length;
for(let i = 1; i < length; i++) {
    if(arr[i] < min) {
        min = arr[i];
    }
}
console.log(min);