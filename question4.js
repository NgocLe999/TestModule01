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

   listEmployee.sort((employee, employeeNext) => employee.fullName.localeCompare(employeeNext.fullName))

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


addNewEmployee(1, 'Nguyen Van A', '01/01/1985', 'Hà Nội', 5000000, 'Công nhân');
addNewEmployee(2, 'Tran Thi B', '10/05/1990', 'TP Hồ Chí Minh', 6000000, 'Tổ trưởng');
addNewEmployee(3, 'Le Van C', '20/07/1995', 'Đà Nẵng', 5500000, 'Công nhân');
addNewEmployee(4, 'Le Van D', '20/07/1992', 'Đà Nẵng', 6500000, 'Công nhân');
addNewEmployee(5, 'Le Van E', '20/07/1995', 'Đà Nẵng', 8500000, 'Công nhân');

displayEmployee();