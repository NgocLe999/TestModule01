// Câu 2: Viết hàm cho phép nhập vào một số nguyên dương, kiểm tra xem số vừa nhập đó có
// phải là số hoàn hảo hay không. Chương trình sẽ trả về true nếu số đó là số hoàn hảo và false
// nếu không phải là số hoàn hảo.

const isPerfectNumber = (number) => {
    
    // Kiểm tra nếu n là số nguyên dương
    if (number <= 0) {
        return false;
    }

    let sum = 0;
    // Tìm các ước của n và tính tổng các ước đó
    for (let i = 1; i < number; i++) {
        if (number % i === 0) {
            sum += i;
        }
    }

    // Kiểm tra nếu tổng các ước bằng với chính số đó
    return sum === number;
}

// Example
console.log(isPerfectNumber(6)); // Kết quả: True
console.log(isPerfectNumber(9)); // Kết quả: False