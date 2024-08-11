//alert("ini pesan alert");

/**
 * confirm
 */
const masuk = confirm("apakah anda yakin ingin melanjutkan");

if(masuk) {
    const name = prompt("Masukkan nama anda ");
    if(name === null || name == ""){
        alert("silahkan masukkan nama");
    } else{
        alert(`Halo ${name} selamat belajar`);
    }    
} else{
    alert("selamat tinggal");
}


