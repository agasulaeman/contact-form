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
      departement: "Aplikasi Bisnis",
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
      position: "Administrator",
      email: "yurik@gmail.com"
    }
  ];

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

// function addNewEmployee(key,newEmployee){
//     const currentEmployeeData = 
// }