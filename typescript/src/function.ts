// Function có return, params
function add1(a: number,b: number){
    return a + b
}

const addResult = (a: number, b: number) => a+b;
console.log(add1(2,3)); // 5
console.log(add1(5,6)); // 11

// add(undefined, null)  // lỗi: ko nhận undefinded



// Function ko có return: kiểu void
function logMessage(message: string): void {
    console.log("Message: ", message);;
    
}


// props trong react sang component: onClick: () => void
// props trong react sang component: onSearch: (keyword: string) => string


// Tham số mặc định Default parameters
function greetUser(name: string, greeting: string = "Hello"): string {
  return `${greeting}, ${name}!`;
}

console.log(greetUser("Minh"));// Hello, Minh
console.log(greetUser("Minhdz", "How are you?")); // How are you?, Minhdz 


// 5. Toán tử spread (Spread Operators)
function sum(...numbers: number[]) : number {
    return numbers.reduce((total, num) => total + num, 0)
}

console.log(sum(1, 2, 3)); // 6
console.log(sum(4, 5, 6, 7)); // 22


// 6. Spread operator
// const arr1: number[] = [1,2,3];
// const arr2: number[] = [4,5,6,7];

// const combinedArray(arr1, arr2)