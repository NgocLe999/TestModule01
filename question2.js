// Câu 2: 
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