// const fullName = "Gangzar agas";

// console.log(fullName);

// let alamatRumah = "Depok";

// const dataSiswa =["Agas","Gareng","Benny"];
// console.log(dataSiswa[2]);

// const dataPegawai = [
//     {
//         nama : "agas",
//         departement : "Aplikasi Bisnis",
//         jabatan: "Officer" 
//     },
//     {
//         nama : "Gangzar",
//         departement : "Aplikasi Support",
//         jabatan: "Admin" 
//     },
//     {
//         nama : "Sulaeman",
//         departement : "Quality Assurance",
//         jabatan: "Manager" 
//     },
// ];

// console.log(dataPegawai[0]);
// console.log(dataPegawai[1].departement);


const dataPegawai = [
    {
        id: "1",
        nama : "agas",
        idPegawai: "109813",
        golongan: "1",
        departement : "Aplikasi Bisnis",
        jabatan: "Officer" 
    },
    {
        id: "1",
        nama : "agas",
        idPegawai: "109813",
        golongan: "1",
        departement : "Aplikasi Bisnis",
        jabatan: "Officer" 
    },
    {
        id: "1",
        nama : "agas",
        idPegawai: "109813",
        golongan: "1",
        departement : "Aplikasi Bisnis",
        jabatan: "Officer" 
    },
];

const tableBody = document.getElementById('dataPegawaiTable');

dataPegawai.forEach(pegawai => {
    const row = document.createElement('tr');

    for (const key in pegawai) {
        const cell = document.createElement('td');
        cell.className = 'px-6 py-4 whitespace-nowrap';
        cell.textContent = pegawai[key];
        row.appendChild(cell);
    }

    tableBody.appendChild(row);
});