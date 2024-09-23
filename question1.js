// Câu 1:


const addItemToArray = ()=> {
    let input = prompt("Nhập các phần tử của mảng, cách nhau bởi dấu phẩy (ví dụ: 1,2,3,4):");
    let array = input.split(',').map(Number);
    return array;
}


const averageSum = (array)  => {

    // Check array không quá 50 phần tử
    if (array.length >= 50) {
        return alert(`Số phần tử của mảng đã quá 50 phần tử. Vui lòng thử lại!`);
    }

    // Check chia hết cho 3
    const divisible = array.filter((number) => number % 3 === 0);

    // Kiểm tra nếu không có số nào chia hết cho 3
    if (divisible.length === 0) {
        return alert("Không có số nào trong mảng chia hết cho 3");
    }

    // Tính tổng các số chia hết cho 3
    let sum = divisible.reduce((acc, number) => acc + number, 0);

    // Tính trung bình cộng
    const average = sum / divisible.length;

    return alert(`Trung bình cộng các số chia hết cho 3 là: ${average}`);
}

// Example
// const array = [3, 7, 5, 17, 82, 2, 40];
const array = addItemToArray();
alert(`Mảng bạn đã nhập là [${array}]`)
averageSum(array);