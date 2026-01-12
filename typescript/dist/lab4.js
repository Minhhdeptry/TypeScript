"use strict";
const add = (a, b) => {
    return a + b;
};
const multiply = (a, b) => {
    return a * b;
};
console.log("Cộng và nhân 2 số a,b");
console.log(add(3, 4));
console.log(multiply(4, 5));
function logStatus(status) {
    if (status == "loading")
        console.log("Đang tải...");
    else if (status == "success")
        console.log("Thành công");
    else if (status == "error")
        console.log("Có lỗi xảy ra");
}
logStatus("loading");
logStatus("success");
logStatus("error");
