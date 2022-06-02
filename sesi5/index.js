
console.log("halo, saya cuma jalan 1 kali saja")

function ehnama() {
    console.log("mau input nama ya")
}

function ehumur() {
    console.log("mau input umur ya")
}

function berubah() {
    // https://www.w3schools.com/jsref/prop_text_value.asp khusus untuk tipe elemen input
    let nama_murid = document.getElementById("nama").value
    let umur = document.getElementById("umur").value

    // ubah h1
    document.getElementById("msg").innerHTML = nama_murid + " umur " + umur

    // ubah paragraf2nya, id ktp, lansia, valid
    // kalau umur 17+, ktp warna biru, kalau tidak ktp warna pink
    if (umur >= 17) {
        document.getElementById("ktp").innerHTML = "ktp warna biru, sudah dewasa"
    } else {
        document.getElementById("ktp").innerHTML = "ktp warna pink, masih anak kecil"
    }

    // kalau umur 60+, sudah lansia, kalau tidak belum termasuk lansia
    if (umur >= 60) {
        document.getElementById("lansia").innerHTML = "sudah lansia"
    } else {
        document.getElementById("lansia").innerHTML = "belum termasuk seorang lansia"
    }

    // kalau umur negatif atau 120+, tidak valid
    if (umur < 0 || umur > 120) {
        document.getElementById("valid").innerHTML = "tidak valid, umur harus ada di antara 0-120"
    }


    document.getElementById("nama").value = ""
    document.getElementById("umur").value = 0
}