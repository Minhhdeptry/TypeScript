// 1. Khởi tạo class
class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    greet(): string {
        return `Xin chào, tôi là: ${this.name}, ${this.age} tuổi.`;
        
    }
}

// 1.2. Khởi tạo object
const p1 = new Person("Minh", 19)
console.log(p1.greet());



// 2. Interface

interface iProduct {
    name: string,
    price: number,
    isActive?: boolean, // optional
}

const product1: iProduct = {
    name: "Iphone 11",
    price: 1000,
    // isActive: true
}

// 2.1 Interface cho function
interface SumFunction{
    (a: number, b: number): number;
}
const sum1 : SumFunction = (a,b) => {
    return a + b;
}
console.log(sum1(4,5)); // 9


// 3. Type object
type Tproduct = {
    name: string,
    price: number,
}

// 3.1 Type union
type Status = "success" | "error" | "loading";
const test1: Status = "error";

type Description = string | null;
type Tproduct2 = {
    name: string,
    price: number,
    description: Description,
}
type TBlog = {
    title: string,
    description: Description
}

// 3.2 Type kết hợp object
type Users = {
    id: number,
    name: string,
    email: string
}

type UserRespone = Users & {
    token: string,
}

const userRespone: UserRespone = {
    id: 1,
    name: "Minh",
    email: "minh@gmail.com",
    token: "abc",
}


// extend interface
interface IUser extends User {
    token: string,
}