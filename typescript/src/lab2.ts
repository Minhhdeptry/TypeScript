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
enum Rate {
    low = 'Thấp',
    medium = 'Trung bình',
    hight = 'Cao'
}

type Product = {
    name: string,
    price: number,
    sale: boolean,
    rate: Rate,
    description: null | string,
}

let listProducts : Product[] = [
    {name: "Laptop", price: 10, sale: true, rate: Rate.low, description: null},
    {name: "Iphone", price: 20, sale: false, rate: Rate.medium, description: null},
    {name: "Tai nghe", price: 3, sale: true, rate: Rate.hight, description: null},
    {name: "Bàn phím", price: 4, sale: false, rate: Rate.low, description: null},
    {name: "Chuột không dây", price: 5, sale: true, rate: Rate.hight, description: null}
]

function addDescription(products: Product[]) : Product[] {
    return products.map(item => ({
        ...item,
        description : item.price > 5 ? "Tốt" : "Bình thường"
    }));
}

listProducts = addDescription(listProducts);

function showProduct (products : Product[]): void {
    products.forEach(item => {
        console.log(
            `Tên: ${item.name}, Giá: ${item.price}, Sale: ${item.sale ? "Có" : "Không"}, Đánh giá: ${item.rate}, Mô tả: ${item.description}`
        );
        
    })
}
console.log("Danh sách sản phẩm");

showProduct(listProducts);
console.log("==========================");


function sumProduct(products : Product[]): number {
    return products.reduce((sum, item) => sum + item.price, 0);
}
console.log("Tổng giá bản sản phẩm");
console.log("Tổng giá: " + sumProduct(listProducts));
console.log("==========================");



function filterProduct(products: Product[]): Product[] {
    return products.filter(item => 
        item.sale === true && (item.rate === Rate.medium || item.rate === Rate.hight)
    )
}

console.log("Sản phẩm đang sale và Đánh giá từ trung bình trở lên: ");
console.log(filterProduct(listProducts));
console.log("==========================");
