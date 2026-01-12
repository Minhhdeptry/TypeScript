"use strict";
// File lab3.ts xứ lý theo yêu cầu, build lab3.js (dist)
// - Hàm tính điểm trung bình (Return type + Arrow Function)
// - Định nghĩa kiểu hàm kiểm tra số chẵn lẻ (Function as Type)
// - Hàm tạo thông tin người dùng (Default + Optional Parameter)
// - Hàm xử lý danh sách sản phẩm (Spread + Rest)
// 1. Hàm tính điểm trung bình
const averageScore = (...scores) => {
    if (scores.length == 0)
        return 0;
    const total = scores.reduce((sum, score) => sum + score, 0);
    return total / scores.length;
};
//Test
console.log("Hàm tính điểm trung bình");
console.log(averageScore(6, 7, 8));
console.log(averageScore(8, 6, 5));
console.log("===========================");
const checkNumber = (number) => {
    return number % 2 == 0 ? "even" : "odd";
};
//Test
console.log("Hàm kiểm tra số chẵn or lẻ");
console.log(checkNumber(2));
console.log(checkNumber(3));
console.log("===========================");
// 3: Hàm tạo thông tin người dùng (Default + Optional Parameter)
const createUser = (name, age, role = "user") => {
    if (age !== undefined) {
        return `Tên: ${name}, Tuổi: ${age}, Vai trò: ${role}`;
    }
    return `Tên: ${name}, Vai trò: ${role}`;
};
//Test
console.log("Hàm thông tin người dùng");
console.log(createUser("Minh"));
console.log(createUser("Minh", 19));
console.log(createUser("Minh", 19, "guide"));
console.log("===========================");
const mergeProducts = (a, b) => {
    return [...a, ...b];
};
const showProducts = (...products) => {
    products.forEach(item => {
        console.log(`ID: ${item.id}, Tên: ${item.name}, Giá: ${item.price}`);
    });
};
// Test
const productsA = [
    { id: 1, name: "Giày", price: 100 },
    { id: 2, name: "Dép", price: 200 }
];
const productsB = [
    { id: 3, name: "Áo", price: 300 }
];
console.log("Hàm danh sách sản phẩm");
const merge = mergeProducts(productsA, productsB);
showProducts(...merge);
console.log("===========================");
