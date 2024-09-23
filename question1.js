// CÂU 1: Cho một mảng số nguyên có số phần tử không vượt quá 50 phần tử, viết chương trình
// hiển thị trung bình cộng các số có trong mảng chia hết cho 3

const averageSum = (array)  => {

    // Check array không quá 50 phần tử
    if (array.length >= 50) {
        return `Số phần tử của mảng đã quá 50 phần tử. Vui lòng thử lại!`
    }

    // Check chia hết cho 3
    let divisible = array.filter((number) => number % 3 === 0);

    // Kiểm tra nếu không có số nào chia hết cho 3
    if (divisible.length === 0) {
        return "Không có số nào trong mảng chia hết cho 3";
    }

    // Tính tổng các số chia hết cho 3
    let sum = divisible.reduce((acc, number) => acc + number, 0);

    // Tính trung bình cộng
    let average = sum / divisible.length;

    return `Trung bình cộng các số chia hết cho 3 là: ${average}`;
}

// Example
let array = [3, 7, 5, 17, 82, 2, 40];
console.log(averageSum(array));