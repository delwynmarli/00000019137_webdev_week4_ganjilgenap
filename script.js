function angkabaru () {
    angka = prompt("masukan angka");
    if (angka % 2 == 0) {
        status = "genap"
        color = "red";
    } else
    {
        status = "ganjil"
        color = "blue";
    }
    document.getElementById("riwayat").innerHTML += "<p style='color:"+color+"'>"+angka+" "+status+"</p>"
    
}

function hapus () {
    document.getElementById("riwayat").innerHTML = "";
}
