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
  /**
   * pembuatan function untuk menampilkan data semua
   */
  
  function getAllDataEmployees() {
    return dataEmployees;
  }
  
  /**
   * panggil function getAllDataEmployees
   */
  
  console.log(getAllDataEmployees());
  
  
  
  function addEmployee(employee) {
    const { id, name, employeeId, group, departement, position, email } = employee;
  
    // Validate fields nya tidak ada
    if (!id || !name || !employeeId || !group || !departement || !position) {
      console.error('data employee kosong.');
      return;
    }
  
    // Check for unique pada 'id'
    if (dataEmployees.some(emp => emp.id === id)) {
      console.error(`Employee with id '${id}' already exists.`);
      return;
    }
  
    // Check for uniqueId dalam 'employeeId'
    if (dataEmployees.some(emp => emp.employeeId === employeeId)) {
      console.error(`Employee with employeeId '${employeeId}' already exists.`);
      return;
    }
  
  
  dataEmployees.push({
      id,
      name,
      employeeId,
      group,
      departement,
      position,
      email
  });
  console.log(`Employee '${name}' added successfully.`);
  }
  
  addEmployee({
    id: "8",
    name: "Adam Suseno",
    employeeId: "409818",
    group: "4",
    departement: "Departement Keuangan",
    position: "Supervisor Analyst",
    email: "suseno@gmail.com"
  });

  
  console.log(dataEmployees);