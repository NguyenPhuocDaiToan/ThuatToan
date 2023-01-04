// Bài 42: Giải hệ phương trình bậc nhất hai ẩn bằng Javascript
// ax + by = c
// dx + ey = f
let a = 1, b = 2, c = 3;
let d = 3, e = -2, f = 1;

let D = a * e - b * d;
let Dx = c * e - b * f;
let Dy = a * f - c * d;

if(D === 0) {
    if(Dx === 0 && Dy === 0) {
        console.log('Hệ có VSN');
    } else {
        console.log('Hệ VN');
    }
} else {
    console.log(`Hệ có cặp nghiệm (x;y) duy nhất (${Dx/D};${Dy/D})`)
}