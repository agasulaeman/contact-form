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
  const { id, name, employeeId, group, departement, position, email, phone } = employee;

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
    email,
    phone
});
console.log(`Employee '${name}' added successfully.`);
}

addEmployee({
  id: "6",
  name: "John whick",
  employeeId: "209818",
  group: "3",
  departement: "Departement Keuangan",
  position: "Analyst"
});

console.log(dataEmployees);

/**
 * function inside object
 */

// const students = {
//   firstName: "Gangzar",
//   address: "Depok",
//   email: "agas@gmail.com",
//   studentDetail: function (){
//     return "my name is " + this.firstName + " my address " + this.address + " my email " + this.email;
//   }
// };

// Log the student details
//console.log(students.studentDetail());

/**
 * sample of looping 
 */

// const carCollection = [
//     {
//       name: "BMW",
//       type: "Sedan",
//       country: "Germany"
//     },
//     {
//       name: "VW",
//       type: "city car",
//       country: "Germany"
//     },
//     {
//       name: "Honda",
//       type: "Family Car",
//       country: "Japan"
//     }
// ];

// let car = "";
// for (let x in carCollection) {
//   car += `Name: ${carCollection[x].name}, Type: ${carCollection[x].type}, Country: ${carCollection[x].country} `;
// }

//console.log(car.length);
//console.log(car);



// const employees = [
//   {
//     name: "Agas",
//     address: "Depok",
//     country: "Indonesia",
//     email: "agas@gmail.com"
//   },
//   {
//     name: "Gangzar",
//     address: "Jakarta",
//     country: "Singapore",
//     email: "gangzar@gmail.com"
//   },
//   {
//     name: "Sulaeman",
//     address: "Madiun",
//     country: "France",
//     email: "sulaeman@gmail.com"
//   }
// ];

// let dataKaryawan = "";
// for (let x in employees) {
//   dataKaryawan += `Name: ${employees[x].name}, Alamat: ${employees[x].address}, Country: ${employees[x].country}, Email: ${employees[x].email} `;
// }
// console.log(dataKaryawan);


/**
 * conditional
 */

// let number1 = 100;
// let number2 = 50;

// if (number1 < number2) {
//   console.log(" you false");
// } else {
// console.log( "you are awesome");
// }

// const nama = "agas";


// let kata = 'gangzar agas';
// let kataIndexBesar = kata.split.toString;
// console.log(kataIndexBesar[0]);
// console.log(kata.includes('agas'));