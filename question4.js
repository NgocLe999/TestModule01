// Câu 4: 
class Employee {
    id;
    fullName;
    dayOfBirth;
    address;
    salary;
    positon;
    constructor(id, fullName, dayOfBirth, address, salary, positon) {
        this.id = id;
        this.fullName = fullName;
        this.dayOfBirth = dayOfBirth;
        this.address = address;
        this.salary = salary;
        this.positon = positon;
    }
}

const listEmployee = []

const addNewEmployee = (id, fullName, dayOfBirth, address, salary, positon) => {

    const employee = new Employee(id, fullName, dayOfBirth, address, salary, positon)

    listEmployee.push(employee)
}

const displayEmployee = () => {

   const tbody = document.querySelector("#employeeTable tbody");

    // Sắp xếp danh sách họ tên theo alphabet
   listEmployee.sort((employee, employeeNext) => employee.fullName.split(" ").pop().localeCompare(employeeNext.fullName.split(" ").pop()))
   
   listEmployee.forEach(employee => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${employee.id}</td>
            <td>${employee.fullName}</td>
            <td>${employee.dayOfBirth}</td>
            <td>${employee.address}</td>
            <td>${employee.salary}</td>
            <td>${employee.positon}</td>
        `;
        tbody.appendChild(row);
    });
}

addNewEmployee(1, 'Nguyen Van Anh', '01/01/1985', 'Hà Nội', 5000000, 'Công nhân');
addNewEmployee(2, 'Tran Thi Lan', '10/05/1990', 'TP Hồ Chí Minh', 6500000, 'Tổ trưởng');
addNewEmployee(3, 'Le Van Bao', '22/07/1995', 'Huế', 5500000, 'Tổ Phó');
addNewEmployee(4, 'Le Van Phuong', '20/03/1992', 'Vũng Tàu', 5300000, 'Công nhân');
addNewEmployee(5, 'Le Van Xuan', '10/07/1980', 'An Giang', 8500000, 'Công nhân');

displayEmployee();