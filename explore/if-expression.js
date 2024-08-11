const siswa = {
    name: "Eko Kurniawan",
    address: "Surabaya",
    study: "Computer Science",
    nilai: 70
}

if (siswa.nilai > 75) {
    console.info(`siswa : ${siswa.name} , Lulus`);
} else{
    console.info(`siswa : ${siswa.name} , Gagal`);
}
console.table({ Name: siswa.name});