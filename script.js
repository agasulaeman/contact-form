const dataEmployees = [
  {
    id: "1",
    name: "Agas",
    employeeId: "109813",
    group: "1",
    departement: "Aplikasi Bisnis",
    position: "Officer",
    email: "agas@gmail.com",
    phone: "+62-812-3456-789",
  },
  {
    id: "2",
    name: "Obby",
    employeeId: "109814",
    group: "1",
    departement: "Aplikasi Bisnis",
    position: "Officer",
  },
  {
    id: "3",
    name: "Ryan",
    employeeId: "109815",
    group: "1",
    departement: "Aplikasi Bisnis",
    position: "Officer",
  },
  {
    id: "4",
    name: "Rizki",
    employeeId: "109816",
    group: "1",
    departement: "Aplikasi Penjualan",
    position: "Manager",
  },
  {
    id: "5",
    name: "Yurik",
    employeeId: "109817",
    group: "1",
    departement: "Aplikasi Penjualan",
    position: "Administrator",
  },
];
/**
 * menampilkan data semua
 */
//dataEmployeesole.log(dataEmployees); 

/**
 * function inside object
 */

const students = {
  firstName: "Gangzar",
  address: "Depok",
  email: "agas@gmail.com",
  studentDetail: function (){
    return "my name is " + this.firstName + " my address " + this.address + " my email " + this.email;
  }
};

// Log the student details
//console.log(students.studentDetail());

/**
 * sample of looping 
 */

const carCollection = [
    {
      name: "BMW",
      type: "Sedan",
      country: "Germany"
    },
    {
      name: "VW",
      type: "city car",
      country: "Germany"
    },
    {
      name: "Honda",
      type: "Family Car",
      country: "Japan"
    }
];

let car = "";
for (let x in carCollection) {
  car += `Name: ${carCollection[x].name}, Type: ${carCollection[x].type}, Country: ${carCollection[x].country} `;
}

//console.log(car.length);
console.log(car);

/**
 * conditional
 */

let number1 = 100;
let number2 = 50;

if (number1 < number2) {
  console.log(" you false");
} else {
console.log( "you are awesome");
}