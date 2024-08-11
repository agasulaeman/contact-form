const employee = {
    name: "agas",
    address: "depok",
    email: "agas@gmail.com",
    grade: "10"
}

switch (employee.grade) {
    case "8":
        alert("Jabatan anda adalah admin");
        break;
    case "9":
        alert("Jabatan anda adalah admin senior");
        case "10":
        alert("Jabatan anda adalah Supervisor");   
    default:
        alert("maaf grade anda tidak terdaftar dalam sistem kami");
        break;
}