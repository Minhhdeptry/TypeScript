"use strict";
// 1. Khởi tạo class
class Person {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        return `Xin chào, tôi là: ${this.name}, ${this.age} tuổi.`;
    }
}
// 1.2. Khởi tạo object
const p1 = new Person("Minh", 19);
console.log(p1.greet());
const product1 = {
    name: "Iphone 11",
    price: 1000,
    // isActive: true
};
const sum1 = (a, b) => {
    return a + b;
};
console.log(sum1(4, 5)); // 9
const test1 = "error";
const userRespone = {
    id: 1,
    name: "Minh",
    email: "minh@gmail.com",
    token: "abc",
};
