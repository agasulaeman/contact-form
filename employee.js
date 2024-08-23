// employee.js
class Employee {
  constructor(id, name, employeeId, departement, position, email) {
    this.id = id;
    this.name = name;
    this.employeeId = employeeId;
    this.departement = departement;
    this.position = position;
    this.email = email;
  }
}

class EmployeeStorage {
  constructor() {
    this.employees = JSON.parse(localStorage.getItem('employees')) || [];
  }

  saveEmployee(employee) {
    const existingEmployeeIndex = this.employees.findIndex(emp => emp.employeeId === employee.employeeId);
    if (existingEmployeeIndex >= 0) {
      this.employees[existingEmployeeIndex] = employee;
    } else {
      this.employees.push(employee);
    }
    localStorage.setItem('employees', JSON.stringify(this.employees));
  }

  deleteEmployee(employeeId) {
    const filteredEmployees = this.employees.filter(employee => employee.employeeId !== employeeId);
    if (this.employees.length !== filteredEmployees.length) {
      this.employees = filteredEmployees;
      localStorage.setItem('employees', JSON.stringify(this.employees));
      alert(`Employee with ID ${employeeId} has been deleted.`);
    } else {
      alert(`Employee with ID ${employeeId} not found.`);
    }
  }
}

export { Employee, EmployeeStorage };