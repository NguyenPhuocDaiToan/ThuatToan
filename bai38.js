// Bài 38: Sử dụng vòng lặp for để xuất các ký tự từ A đến Z bằng Javascript
// for(let c = 'A'; c <= 'Z'; c++) {
//     console.log(c);
// }
let codeA = 'A'.charCodeAt();
let codeZ = 'Z'.charCodeAt();

for(let i = codeA; i <= codeZ; i++) {
    console.log(String.fromCharCode(i));
}
