/**
 * contoh dalam array
 */
let arrayKosong =[];
let arrayNama = ["agas","sulaeman","gangzar"];

arrayNama.push("umar","dzahirul");
arrayNama[1] = "Budi";
console.info(arrayNama[1]);
delete arrayNama[4];
delete arrayNama[0];
arrayNama[4] = "ashraf";
arrayNama.push(1,2,3,4,5,6);
arrayNama.push(["magetan","madiun","jawa timur"]);
console.table(arrayNama);