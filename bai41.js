// Bài 41: Kiểm tra loại tam giác gì bằng Javascript

let a = 3, b = 4, c = 6;

if(a +b > c && b + c > a && c + a > b) {
    // a^2 = b^2 + c^2 -2.b.c.cosa
    // => cosa = (b^2 + c^2 - a^2)/(2bc)
    cosa = (b*b + c*c - a*a) / (2*b*c);
    cosb = (a*a + c*c - b*b) / (2*a*c);
    cosc = (a*a + b*b - c*c) / (2*a*b);
    if(cosa === 0 || cosb === 0 || cosc === 0) {
        if(a == b || b == c || c == a) {
            console.log('Tam giác vuông cân');
        } else {
            console.log('Tam giác vuông');
        }
    } else if(a == b && b == c) {
        console.log('Tam giác đều');
    } else if(a == b || b == c || c == a) {
        console.log('Tam giác cân');
    } else if(cosa < 0 || cosb < 0 || cosc < 0) {
        console.log('Tam giác tù');
    } else {
        console.log('Tam giác nhọn');
    }
} else {
    console.log(`3 cạnh ${a}, ${b}, ${c} không phải là tam giác`);
}