// Câu 3: 

const isLeapYear = (year) => {
    // Kiểm tra năm nhuận
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 100 === 0 && year % 400 === 0)) {
        return true  // năm nhuận
    } 
    if (year % 100 === 0 && year % 400 !== 0) {
        return false  // không phải năm nhuận
    }
}

const validateMonthAndYear = (input) => {
    // Kiểm tra định dạng MM/yyyy
    const regex = /^(0[1-9]|1[0-2])\/\d{4}$/;
    return regex.test(input);
}


const getDayInMonth = (month, year) => {
    // Kiểm tra số ngày của từng tháng
    switch(month) {
        case 1: case 3: case 5: case 7: case 8: case 10: case 12:
            return 31;  // Các tháng có 31 ngày
        case 4: case 6: case 9: case 11:
            return 30;  // Các tháng có 30 ngày
        case 2:
            // Kiểm tra nếu là tháng 2 và là năm nhuận
            return isLeapYear(year) === true ? 29 : 28;  
        default:
            return "Tháng nhập vào không hợp lệ. Vui lòng thử lại!";
    }
}


const checkNow = () => {
    const input = prompt(`Vui lòng nhập tháng và năm theo định dạng "Month//Year": `);
    console.log('check input', input);
    
    // Kiểm tra định dạng hợp lệ
    if (!validateMonthAndYear(input)) {
        alert("Định dạng không hợp lệ! Vui lòng nhập lại theo định dạng Month//Year.");
        return;
    }

    // Tách tháng và năm từ chuỗi nhập vào
    const [month, year] = input.split('/').map(Number);
    console.log('moth,year',month, year);

    // Tính và hiển thị số ngày trong tháng
    const days = getDayInMonth(month, year);

    alert(`Tháng 0${month}/${year} có ${days} ngày.`);
}

checkNow();



