/* 
Buatlah fungsi dengan nama kompilasi, dengan parameter input array 2 dimensi seperti pada contoh. 
Fungsi bertugas untuk membuat rekap data dalam bentuk object, dimana semua data akan dikelompokkan berdasarkan jurusan. 
Bentukan output dapat dilihat pada contoh

Contoh :
 */

function kompilasiJurusan(array) {
    let output = {};

    for (let i = 0; i < array.length; i++) {
        if (!output[array[i][0]]) {
            output[array[i][0]] = [];
        }
        output[array[i][0]].push(array[i][1]);
    }
    return output;
}

console.log(kompilasiJurusan([
    ['Biologi', 'Jonas'],
    ['Fisika', 'Ulrich'],
    ['Akuntansi', 'Hannah'],
    ['Biologi', 'Barbosz'],
    ['Fisika', 'Claudia'],
    ['Biologi', 'Edmund'],
]));

/*
output :
{
  Biologi: ['Jonas', 'Barbosz', 'Edmund'],
  Fisika: ['Ulrich', 'Claudia'],
  Akuntansi: ['Hannah']
}
 */