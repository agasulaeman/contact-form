const value1 = 1;
/**
 * untuk melakukan konversi dari string ke number gunakan 
 * parseInt seperti contoh pada line ke 6
 */
const value2 = parseInt("1");
const hasil = value1 + value2;

console.log(hasil);

/**
 * NAN Not An Number 
 * adalah sebuah proses ketika melakukan proses konversi dari String angka ke number
 * namun kita melakukan input dengan kata / kalimat String 
 */

document.writeln(parseInt("GOBLOG"));
/**
 * untuk NAN apabila variable depan nya adalah String angka 
 * namun belakang nya adalah String kata maka JavaScript akan meng ignore belakang nya 
 * sebagai contoh
 */
const floatingPhi = "3.14agas"; 
document.writeln(`<p>${("34.1agas")}</p>`);

/**
 * untuk number dia tidak akan mentolerir apabila string angka nya ada kalimat atau karakter
 * maka dia akan memunculkan nilai NAN
 */

document.writeln(`<p>${Number("109813agas")}</p>`)