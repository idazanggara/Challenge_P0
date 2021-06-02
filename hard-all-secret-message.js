/*
SECRET MESSAGE
==============
Dalam situasi perang dengan Negara Api, Negara Air Mineral harus melakukan pengolahan pesan, agar tidak dapat dengan mudah dibaca oleh lawan.
Setiap prajurit, hanya membawa lembaran sajak. Kemudian, akan bertemu dengan messanger dari kumpulan prajurit lain.
Kumpulan prajurit terdepan akan memberikan "kunci" untuk membaca pesan yang tersimpan pada sajak yang dibawa

Cara menterjemahkan kode :
- Kunci adalah array of number, yang merupakan kumpulan angka-angka desimal
- Setiap angka harus dirubah ke dalam 4 digit binary, algoritma nya bisa dilihat di https://www.rapidtables.com/convert/number/decimal-to-binary.html
- 4 digit binary yang dihasilkan berisi angka 0 dan 1
- Kita akan mengambil kata-kata dalam sajak yang kita bawa, sesuai posisi angka 1, dilihat dari index kalimat ke 0
- Kata-kata setelah kata ke 4 akan dihiraukan
- Rangkaikan semua kata yang didapat, untuk mendapatkan pesan rahasia

Contoh :
Angka 1, binary nya dalam 4 digit adalah 0001
Jika kalimat sajak adalah "Ini adalah sajak pertama", maka ambil kata 'pertama'

Angka 5, binary nya dalam 4 digit adalah 0101
Jika kalimat sajak adalah "Semua musuh akan menyerang kembali besok malam", maka ambil kata 'musuh' dan 'menyerang', semua kata setelah kata 'menyerang' akan dihiraukan

PETUNJUK :
==========
Gunakanlah fungsi-fungsi yang sudah pernah kamu buat sebelumnya
*/

function getTheMessage(words, keys) {
    let output = ``;

    let array2 = [];

    for (let i = 0; i < keys.length; i++) {
        let array = [];
        let array1 = [];
        let sentence = ``;

        for (let j = 0; j < 4; j++) {

            if (keys[i] > 0) {
                array.unshift(keys[i] % 2);
                keys[i] = Math.floor(keys[i] / 2);
            }

            if (keys[i] === 0 && array.length < 4) {
                array.unshift(0);
            }
        }

        for (let k = 0; k < words[i].length; k++) {
            if (words[i][k] !== ` `) {
                sentence += words[i][k];
            }

            if (words[i][k] === ` ` || k === words[i].length - 1) {
                array1.push(sentence);
                sentence = ``;
            }
        }

        for (let i = 0; i < array.length; i++) {
            if (array[i] === 1) {
                array2.push(array1[i]);
            }
        }
    }

    for (let i = 0; i < array2.length; i++) {
        if (i === array2.length - 1) {
            output += array2[i].toLowerCase();
            break;
        }

        if (output.length === 0) {
            for (let j = 0; j < array2[i].length; j++) {
                if (j === 0) {
                    output += array2[i][j].toUpperCase();
                    continue;
                }
                output += array2[i][j].toLowerCase();
            }
            output += ` `;
            continue;
        }
        output += array2[i].toLowerCase();
        output += ` `;
    }
    return output;
}

let kunci = [1, 4, 2, 0, 12]
let sajak = [
    'Ingatkah kota kelahiran kita',     // 0001 => binary dari 1
    'Kota Serang nan indah dan lapang', // 0100 => binary dari 4,  hiraukan semua kata setelah 'indah'
    'Tidak ada musuh dari hati ini',    // 0010 => binary dari 2,  hiraukan semua kata setelah 'dari'
    'Karena damai selalu dalam diri',   // 0000 => binary dari 0,  tidak ada yang kita ambil
    'Besok pagi kita menuai padi'       // 1100 => binary dari 12, hiraukan semua kata setelah 'menuai'
]

console.log(getTheMessage(sajak, kunci)) // Kita serang musuh besok pagi

kunci = [0, 1, 0, 2, 10, 2]
sajak = [
    'Cantik rupawan dirimu nak',                  // 0000 => binary dari 0
    'Kulihat dari sembarang posisi dan tertegun', // 0001 => binary dari 1,  hiraukan semua kata setelah 'posisi'
    'Bidadari terlahir',                          // 0000 => binary dari 0
    'Akankah aku lawan keelokan ini',             // 0010 => binary dari 2,  hiraukan semua kata setelah 'keelokan'
    'Di ufuk timur matahari tersenyum',           // 1010 => binary dari 10, hiraukan semua kata setelah 'matahari'
    'Menerangi ujung lembah tempat kita berdiam', // 0010 => binary dari 2,  hiraukan semua kata setelah 'tempat'
]

console.log(getTheMessage(sajak, kunci)) // Posisi lawan di timur lembah