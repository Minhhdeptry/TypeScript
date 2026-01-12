"use strict";
// 1. Core Types: number, string, boolean
console.log('Typescript');
let myName = 'Minhdeptry';
const age = 19;
const gender = true;
console.log('My name is: ' + myName);
console.log('My age is: ' + age);
console.log('My gender is: ' + gender);
console.log("=======================");
// 2. Type inference: tự động suy diễn kiểu dữ liệu
let count = 9; // tự động suy diễn count là number
// count = '9': type string ko thể gán cho number
// 3. Core Types: object
let product = {
    id: 1,
    title: "Iphone 15",
    price: 1000,
    // gender: true 
};
// 4. Core Types: array[]
let numbers = [1, 2, 3];
let text = ['abc', 'xyz'];
// 5. Special Types: tuple : cố định độ dài và kiểu được xác định
let tuples = ['abc'];
// let tuple : [string, number] = ["abc",3, true]; : độ dài ko khớp
// 6. Special Types: any : nhận bất kỳ giá trị nào
let data = 10;
data = "Hello world";
data = true;
// 7. Type: Union và Literal Type
// Union type: một biến có thể thuộc nhiều kiểu
let union;
union = "Hello";
union = 10;
// union = true; : lỗi
// Literal type: chỉ định giá trị cụ thể
let literal;
literal = "success";
literal = "Error";
// literal = "Loading"; : Lỗi
// 8. Null và Undefined
// null: giá trị rỗng ( ko có gì)
// undefined: biến chưa được gán giá trị
const datas = {
    id: 1,
    title: "Learn English",
    description: null,
    time: undefined
};
datas.description; // null
datas.time; // undefined
// 9. Unknown và Any
let input = "Hello";
// input.toLowerKey() // error
// hay gặp try catch axios => (error: unknow) {as Axioserror}: message
// 10. Type Assertions
let value = "Hello world";
let strLength = value.length;
// hoặc sử dụng
let strLength1 = value.length;
