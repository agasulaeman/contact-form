/**
 * contoh penggunaan dalam tipe data object
 */
const employee = {};

/**
 * Menambah atau mengubah data object
 */

employee ["employeeId"] = "109813";
employee ["name"] = "Gangzar";
employee ["email"] = "gangzar.10@gmail.com";
employee ["address"] = "depok";
/**
 * contoh menghapus object 
 */
delete employee  ["address"];

/**
 * syntax untuk menampilkan tipe data object
 */
console.table(employee);

/**
 * membuat object dengan properties
 */

const siswa = {
    name: "Eko Kurniawan",
    address: "Surabaya",
    study: "Computer Science"
}
console.table(siswa);

/**
 * kode mengakses property object
 */

console.info(`address : ${siswa.name}`);