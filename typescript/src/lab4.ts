// 1. Tạo type Student gồm id, name, score
type Student = {
    id: number,
    name: string,
    score: number,
}


// 2. Tạo interface User có id, email là required, còn phone optional.
interface User {
    id: number,
    email: string,
    phone?: number,
}

// 3. Tạo type function Calculate cho phép cộng và nhân. Nhận 2 số a, b
// Trả về number Viết hàm:
// add(a, b)
// multiply(a, b)

type Calculate = (a: number, b: number) => number;
const add: Calculate = (a,b) => {
    return a+b;
}
const multiply: Calculate = (a,b) => {
    return a*b;
}

console.log("Cộng và nhân 2 số a,b");
console.log(add(3,4));
console.log(multiply(4,5));



// 4. Tạo type ApiStatus gồm: "idle" | "loading" | "success" | "error"
// Viết function logStatus(status: ApiStatus) Nếu:
// loading → in "Đang tải..."
// success → in "Thành công"
// error → in "Có lỗi xảy ra"

type ApiStatus = "idel" | "loading" | "success" | "error";

function logStatus(status: ApiStatus): void {
    if(status == "loading")
        console.log("Đang tải...");
    else if(status == "success")
        console.log("Thành công");
    else if(status == "error")
        console.log("Có lỗi xảy ra");
}

logStatus("loading")
logStatus("success")
logStatus("error")