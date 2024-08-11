const person = {
    firstName: "agas",
    email: "agas@gmail.com"
}

if ("firstName" in person) {
    alert(`Hello ${person.firstName}`);
} else {
    alert(`Nama yang kamu masukkan tidak sesuai`);
}