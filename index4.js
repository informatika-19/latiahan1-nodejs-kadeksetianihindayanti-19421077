// array

// conts listNilai = ['A', 'B', 'C']
// console.log(listNilai[2])

const dataMahasiswa = [
    {
        nama: 'Kadek',
        npm: '19421077',
        prodi: 'informatika'
    },
    {
        nama:'Hinda',
        npm: '19421088',
        prodi: 'Sistem Informasi'
    }
]

// console.log(dataMahasiswa[0].nama)

for (let i in dataMahasiswa) {
 console.log(dataMahasiswa[i].nama + ' _ ' + dataMahasiswa[i].npm + ' _ ' + dataMahasiswa[i].prodi)   
}