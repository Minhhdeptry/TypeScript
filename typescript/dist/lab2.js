"use strict";
// Tạo type Product có các trường sau:
// name: string
// price: number
// sale: boolean
// rate: enum {low : 'Thấp', medium: 'Trung bình', hight : 'Cao'}
// Tạo mảng listProducts có các phần tử có kiểu Product
// Nhập ít nhất 5 phần tử
// Viết hàm thêm mới 1 phần tử vào mảng listProducts có key = description, có giá trị = 'Tốt' nếu price > 5, 'Bình thường' nếu price <=5 (sử dụng map)
// Viết hàm hiển thị danh sách sản phẩm: (Tên sản phẩm, giá bán, trạng thái sale,Đánh giá) (Sử dụng forEach)
// Viết hàm tính tổng giá bán sản phẩm (sử dụng reduce)
// Viết hàm lọc những sản phẩm đang Sale và đánh giá từ Trung bình trở lên (Sử dụng filter)
var Rate;
(function (Rate) {
    Rate["low"] = "Th\u1EA5p";
    Rate["medium"] = "Trung b\u00ECnh";
    Rate["hight"] = "Cao";
})(Rate || (Rate = {}));
let listProducts = [
    { name: "Laptop", price: 10, sale: true, rate: Rate.low, description: null },
    { name: "Iphone", price: 20, sale: false, rate: Rate.medium, description: "Không có mô ta" },
    { name: "Tai nghe", price: 3, sale: true, rate: Rate.hight, description: null },
    { name: "Bàn phím", price: 4, sale: false, rate: Rate.low, description: "abc" },
    { name: "Chuột không dây", price: 5, sale: true, rate: Rate.hight, description: null }
];
function addDescription(products) {
    return products.map(item => ({
        ...item,
        description: item.price > 5 ? "Tốt" : "Bình thường"
    }));
}
listProducts = addDescription(listProducts);
function showProduct(products) {
    products.forEach(item => {
        console.log(`Tên: ${item.name}, Giá: ${item.price}, Sale: ${item.sale ? "Có" : "Không"}, Đánh giá: ${item.rate}, Mô tả: ${item.description}`);
    });
}
console.log("Danh sách sản phẩm");
showProduct(listProducts);
console.log("==========================");
function sumProduct(products) {
    return products.reduce((sum, item) => sum + item.price, 0);
}
console.log("Tổng giá bản sản phẩm");
console.log("Tổng giá: " + sumProduct(listProducts));
console.log("==========================");
function filterProduct(products) {
    return products.filter(item => item.sale === true && (item.rate === Rate.medium || item.rate === Rate.hight));
}
console.log("Sản phẩm đang sale và Đánh giá từ trung bình trở lên: ");
console.log(filterProduct(listProducts));
console.log("==========================");
