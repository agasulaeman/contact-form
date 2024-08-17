const dataEmployees = [
  {
    id: "1",
    name: "Agas",
    employeeId: "109813",
    group: "1",
    departement: "Aplikasi Bisnis",
    position: "Officer",
    email: "agas@gmail.com"
  },
  {
    id: "2",
    name: "Obby",
    employeeId: "109814",
    group: "1",
    departement: "Aplikasi Support",
    position: "Officer",
    email: "obby@gmail.com"
  },
  {
    id: "3",
    name: "Ryan",
    employeeId: "109815",
    group: "1",
    departement: "Aplikasi Bisnis",
    position: "Officer",
    email: "ryan@gmail.com"
  },
  {
    id: "4",
    name: "Rizki",
    employeeId: "109816",
    group: "1",
    departement: "Aplikasi Penjualan",
    position: "Manager",
    email: "rizki@gmail.com"
  },
  {
    id: "5",
    name: "Yurik",
    employeeId: "109817",
    group: "1",
    departement: "Aplikasi Penjualan",
    position: "Admin",
    email: "yurik@gmail.com"
  }
];

// Save employee data to local storage
localStorage.setItem('employees', JSON.stringify(dataEmployees));

function displayEmployeeData() {
  // mengembalikan employee data from local storage
  const employees = JSON.parse(localStorage.getItem('employees')) || [];
  console.log(employees);

  const listEmployees = document.getElementById('employeesData');
  listEmployees.innerHTML = '';

  employees.forEach(employee => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td class="px-6 py-4 whitespace-nowrap">${employee.id}</td>
      <td class="px-6 py-4 whitespace-nowrap">${employee.name}</td>
      <td class="px-6 py-4 whitespace-nowrap">${employee.employeeId}</td>
      <td class="px-6 py-4 whitespace-nowrap">${employee.email}</td>
      <td class="px-6 py-4 whitespace-nowrap">${employee.position}</td>
      <td class="px-6 py-4 whitespace-nowrap">${employee.departement}</td>
      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
        <a href="#" class="text-indigo-600 hover:text-indigo-900">Edit</a>
        <a href="#" class="text-red-600 hover:text-red-900 ml-4">Delete</a>
      </td>
    `;
    listEmployees.appendChild(row);
  });
}

displayEmployeeData();



  function saveEmployeestoLocalStorage() {
    localStorage.setItem("dataEmployees",JSON.stringify(dataEmployees));
  }
  saveEmployeestoLocalStorage("dataEmployees",dataEmployees);
  function getDataEmployeeFromLocalStorage(key) {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data):[];
  }

  /**
   * pengembalian data dari object JSON menjadi variable
   */

  const employeeData = getDataEmployeeFromLocalStorage("employees");
  console.log(employeeData);

/**
 * adding new employee Data to LocalStorage
 */

function addNewEmployeeToLocalStorage(employeeData){
 let dataEmployees;
 if (localStorage.getItem('employees') === null) {
  dataEmployees = [];
 } else {
  try {
    dataEmployees = JSON.parse(localStorage.getItem('employees'));
  } catch (error) {
    console.error('Error parsing Json EmployeeData: ', error);
    dataEmployees = [];    
  }
 }
 dataEmployees.push(employeeData);
 const stringifyData = JSON.stringify(dataEmployees);
 localStorage.setItem('employees',stringifyData);
 console.info(`Employees '${employeeData.name}' berhasil ter insert.`);
}

const newEmployee = {
  id: "8",
  name: "Adam Suseno",
  employeeId: "409818",
  group: "4",
  departement: "Departement Keuangan",
  position: "Supervisor Analyst",
  email: "suseno@gmail.com"
};

//addNewEmployeeToLocalStorage(newEmployee);
console.log(localStorage.getItem('employees'));

function deleteEmployeeDataFromLocalStorage(employeeId) {
  const deleteEmployee = JSON.parse(localStorage.getItem('employees'));
  const index = deleteEmployee.findIndex(employee => employee.employeeId === employeeId);

  if (index !== -1) {
    dataEmployees.splice(index, 1);

    localStorage.setItem('employees', JSON.stringify(dataEmployees));

    console.log(`Employee with ID ${employeeId} deleted successfully.`);
  } else {
    console.log(`Employee with ID ${employeeId} not found.`);
  }
}

//deleteEmployeeDataFromLocalStorage("109814");
console.log(localStorage.getItem('employees'));