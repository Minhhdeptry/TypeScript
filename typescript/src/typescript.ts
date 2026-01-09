// 1. Core Types: number, string, boolean

console.log('Typescript');
let myName: string = 'Minhdeptry';
const age : number = 19;
const gender : boolean = true;

console.log('My name is: ' + myName);
console.log('My age is: ' + age);
console.log('My gender is: ' + gender);

console.log("=======================");

// 2. Type inference: tự động suy diễn kiểu dữ liệu
let count = 9; // tự động suy diễn count là number
// count = '9': type string ko thể gán cho number


// 3. Core Types: object
let product : {
    id: number,
    title: string,
    price: number
} = {
    id: 1,
    title: "Iphone 15",
    price: 1000,
    // gender: true 
};


// 4. Core Types: array[]
let numbers: number[] = [1,2,3];
let text: string[] = ['abc', 'xyz'];


// 5. Special Types: tuple : cố định độ dài và kiểu được xác định
let tuples : [string] = ['abc']
// let tuple : [string, number] = ["abc",3, true]; : độ dài ko khớp


// 6. Special Types: any : nhận bất kỳ giá trị nào
let data: any = 10;
data = "Hello world";
data = true;


// 7. Type: Union và Literal Type
// Union type: một biến có thể thuộc nhiều kiểu
let union : string | number;
union = "Hello";
union = 10;
// union = true; : lỗi

// Literal type: chỉ định giá trị cụ thể
let literal : "success" | "failed" | "Error";
literal = "success";
literal = "Error";
// literal = "Loading"; : Lỗi


// 8. Null và Undefined
// null: giá trị rỗng ( ko có gì)
// undefined: biến chưa được gán giá trị

const datas : {
    id: number,
    title: string,
    description: string | null,
    time: number | undefined,
} = {
    id: 1,
    title: "Learn English",
    description: null,
    time: undefined
}

datas.description; // null
datas.time; // undefined