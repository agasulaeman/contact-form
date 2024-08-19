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

function storeEmployeesInLocalStorage(dataEmployees) {
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem('employees', JSON.stringify(dataEmployees));
  } else {
    console.error('localStorage is not supported in this browser.');
    // Consider alternative storage or handling
  }
}

function displayEmployeeData() {
  const employees = JSON.parse(localStorage.getItem('employees')) || [];
  console.log(employees);

  const listEmployees = document.getElementById('employeesData');
  if (listEmployees) {
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
          <a href="#" class="text-red-600 hover:text-red-900 ml-4 delete-employee" data-employee-id="${employee.employeeId}">Delete</a>
        </td>
      `;
      listEmployees.appendChild(row);
    });

    // Attach delete event listener to each delete link
    const deleteLinks = document.querySelectorAll('.delete-employee');
    deleteLinks.forEach(link => {
      link.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior

        const employeeIdToDelete = this.getAttribute('data-employee-id');
        const confirmDelete = confirm(`Apakah Anda yakin ingin menghapus employee dengan ID ${employeeIdToDelete}?`);
        if (confirmDelete) {
          deleteEmployee(employeeIdToDelete);
        }
      });
    });
  } else {
    console.error('employeesData element not found in the DOM');
  }
}

function deleteEmployee(employeeId) {
  let dataEmployees = JSON.parse(localStorage.getItem('employees')) || [];
  console.log('Before delete:', dataEmployees);

  const filteredEmployees = dataEmployees.filter(employee => employee.employeeId !== employeeId);

  if (dataEmployees.length !== filteredEmployees.length) {
    localStorage.setItem('employees', JSON.stringify(filteredEmployees));
    alert(`Employee with ID ${employeeId} has been deleted.`);
    console.log('After delete:', filteredEmployees);
    displayEmployeeData(); // Refresh the displayed data
  } else {
    alert(`Employee with ID ${employeeId} not found.`);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM loaded');

  const submitButton = document.getElementById('submitButton');
  const employeeForm = document.getElementById('employeeForm');

  if (submitButton && employeeForm) {
    submitButton.addEventListener('click', (event) => {
      event.preventDefault(); // Prevent default form submission behavior

      const confirmed = confirm('Are you sure you want to save the employee data?');
      if (confirmed) {
        const userName = document.getElementById('username').value;
        const employeeId = document.getElementById('employeeId').value;
        const email = document.getElementById('email').value;
        const position = document.querySelector('#position input[type="radio"]:checked').id;
        const departement = document.querySelector('#departement select').value;

        let dataEmployees = JSON.parse(localStorage.getItem('employees')) || [];
        console.log(dataEmployees);

        const newEmployee = {
          id: (dataEmployees.length + 1).toString(),
          name: userName,
          employeeId: employeeId,
          departement: departement,
          position: position,
          email: email
        };

        dataEmployees.push(newEmployee);
        localStorage.setItem('employees', JSON.stringify(dataEmployees));
        window.location.href = 'index.html';
        alert("Employee Berhasil tersimpan");
      } else {
        window.location.href = 'index.html';
        console.log('Form submission canceled.');
      }
    });
  }

  displayEmployeeData();
});

function redirectToEdit(employeeID) {
  window.location.href = `item.html?employeeID=${employeeID}`;
}