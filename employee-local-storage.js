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
          <a href="#" class="text-red-600 hover:text-red-900 ml-4">Delete</a>
        </td>
      `;
      listEmployees.appendChild(row);
    });
  } else {
    console.error('employeesData element not found in the DOM');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM loaded');

  const submitButton = document.getElementById('submitButton');
  const employeeForm = document.getElementById('employeeForm');
  const deleteButton = document.getElementById('deleteButton');

  console.log('submitButton:', submitButton);
  console.log('deleteButton:', deleteButton);
  console.log('employeeForm:', employeeForm);

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
  } else {
    console.error('submitButton or employeeForm not found in the DOM');
  }

  if (deleteButton) {
    deleteButton.addEventListener('click', (event) => {
      event.preventDefault(); // Prevent default button behavior

      const confirmDelete = confirm('Enter the employee ID to delete:');
      if (confirmDelete) {
        let dataEmployees = JSON.parse(localStorage.getItem('employees')) || [];
        console.log('Before delete:', dataEmployees);

        const filteredEmployees = dataEmployees.filter(employee => employee.employeeId !== employeeIdToDelete);
        
        if (dataEmployees.length !== filteredEmployees.length) {
          localStorage.setItem('employees', JSON.stringify(filteredEmployees));
          alert(`Employee with ID ${employeeIdToDelete} has been deleted.`);
          console.log('After delete:', filteredEmployees);
        } else {
          alert(`Employee with ID ${employeeIdToDelete} not found.`);
        }
      }
    });
  } else {
    console.error('deleteButton not found in the DOM');
  }
});

function confirmDelete(employeeId) {
  const isConfirmed = confirm('Are you sure you want to delete this employee?');
  if (isConfirmed) {
    deleteEmployee(employeeId);
  } else {
    console.log('Delete action cancelled');
  }
}

function confirmEdit(employeeId) {
  const isConfirmed = confirm('Are you sure you want to edit this employee?');
  if (isConfirmed) {
    console.log('Editing employee with ID:', employeeId);
    // Proceed with edit action, like opening an edit form
    openEditForm(employeeId); // Example function to open the edit form
  } else {
    console.log('Edit action cancelled');
  }
}

// Example functions for deleting and editing
function deleteEmployee(employeeId) {
  // Logic to delete the employee goes here
  console.log('Employee with ID:', employeeId, 'has been deleted.');
}

function openEditForm(employeeId) {
  // Logic to open the edit form goes here
  console.log('Opening edit form for employee with ID:', employeeId);
}

displayEmployeeData();