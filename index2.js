const nilai = 80
let nialiHuruf = ''
let keterangan = ''

// logika bercabang
if (nilai >= 85) {
    nilaiHuruf = 'A'
    keterangan = 'Sangat Baik'
} else if (nilai >= 75) {
    nilaiHuruf = 'B'
    keterangan = 'Baik'
} else if (niali >= 65) {
    nilaiHuruf = 'C'
    keterangan = 'Cukup'
} else if (nilai >= 55) {
    nilaiHuruf = 'D'
    keterangan = 'Buruk'
} else {
    nilaiHuruf = 'E'
    keterangan = 'Sangat Buruk'
}

console.log('Nilai Anda' + nilaiHuruf + '(' + keterangan +')')