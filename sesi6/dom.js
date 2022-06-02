document.write("<h1>Halo, saya hasil write dari dom.js</h1>")

function changeTitle(){
    // document.title = "berubah"
    // ambil title dari document dengan id title
    let text = document.getElementById("teks").value

    document.title = text
}

let index_gambar = 0
let list_gambar = ["kopi.jpg", "neko.png", "tahu.jpg"]

function changeImage() {
    index_gambar++
    if (index_gambar >= list_gambar.length) index_gambar = 0
    
    document.getElementById("gambar").src = "images/" + list_gambar[index_gambar]
}

let index_warna = 0
let list_warna = ["white", "darkgreen", "gray", "navy"]
// list_warna[0] "white"
// list_warna[1] "darkgreen"
// list_warna[2] "gray"
// list_warna[3] "navy"
// list_warna[4] undefined
// list_warna.length 4

// cara untuk nambah 1
// index_warna++
// index_warna += 1
// index_warna = index_warna + 1

function changeColor(){
    // document.getElementById(id).style.property = new style
    index_warna++
    if (index_warna >= list_warna.length) {
        index_warna = 0
    }

    document.body.style.backgroundColor =  list_warna[index_warna]
}