"use strict";
// Viết 1 hàm trả về chu vi và diện tích hình chữ nhật
// Viết 1 hàm tính tổng nhiều số (không biết trước số lượng tham số), sử dụng rest parameter
// Viết hàm trả về số lượng xuất hiện của 1 kí tự trong chuỗi
// Viết hàm trả về boolean kiểm tra 1 số có phải số nguyên tố
function tinhChuViDienTich(dai, rong) {
    let chuVi = (dai + rong) * 2;
    let dienTich = dai * rong;
    return { chuVi, dienTich };
}
//test
console.log('Chu vi và diện tích HCN');
console.log(tinhChuViDienTich(4, 5));
console.log(tinhChuViDienTich(6, 7));
console.log("=======================");
function tinhTong(...so) {
    let tong = 0;
    for (let i = 0; i < so.length; i++) {
        tong += so[i];
    }
    return tong;
}
//test
console.log('Tính tổng');
console.log('Tổng các số là:' + tinhTong(1, 2, 3));
console.log('Tổng các số là:' + tinhTong(5, 10, 15));
console.log("=======================");
function demKiTu(chuoi, kiTu) {
    let dem = 0;
    for (let i = 0; i < chuoi.length; i++) {
        if (chuoi[i] === kiTu) {
            dem++;
        }
    }
    return dem;
}
//test
console.log('Đếm kí tự trong một chuỗi');
console.log(demKiTu('typescript', 't'));
console.log(demKiTu('typescript', 'a'));
console.log("=======================");
function checkSoNT(n) {
    if (n < 2) {
        return false;
    }
    for (let i = 2; i < n; i++) {
        if (n % i == 0) {
            return false;
        }
    }
    return true;
}
//test
console.log('Kiểm tra 1 số có phải là số nguyên tố hay ko');
console.log(checkSoNT(1));
console.log(checkSoNT(2));
console.log(checkSoNT(3));
console.log(checkSoNT(4));
console.log("=======================");
