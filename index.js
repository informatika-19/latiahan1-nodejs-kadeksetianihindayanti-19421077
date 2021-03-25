// fucntion
function hitungNilai (nilai1, nilai2) {
    return nilai1 + nilai2
}

const hasil = hitungNilai(14, 8)

// console.log(hasil)

const buatNasi = (Beras, Air ) => {
    if (Beras) {
        console.log('Beras OK')
    } else {
        console.log('Mohon Masukan Beras')
    }

    if (Air) {
        console.log('Air OK')
    } else {
        console.log('Mohon Masukan Air')
  }
}
buatNasi ('Beras', 'Air')