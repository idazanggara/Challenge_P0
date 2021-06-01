/*
===
Caesar Encryption
===
Caesar Encryption adalah metoda enkripsi tertua dan ringan. 
Enkripsi dilakukan hanya dengan memajukan atau memundurkan setiap karakter sejumlah yang ditentukan.

NOTE :
1. selain alphabet, tidak usah di olah

RELEASE 1
-
Buat lah sebuah fungsi encrypt, dengan input sebuah string dan angka yang menunjukkan jumlah langkah maju karakter. 
Jika sampai huruf z, pemrosesan selanjutnya akan balik lagi ke a dan seterusnya

Contoh :
*/

function caesar_encrypt(str, num) {
    let kamus = `abcdefghijklmnopqrstuvwxyz`;
    let output = ``;

    for (let i = 0; i < str.length; i++) {
        let flag = false;
        for (let j = 0; j < kamus.length; j++) {
            if (str[i] === kamus[j]) {
                flag = true;
                if (j + num > 25) {
                    output += kamus[j + num - 26];
                    break;
                }
                output += kamus[j + num];
                break;
            }
        }
        if (flag) {
            continue;
        }
        output += str[i];
    }
    return output;
}

console.log(caesar_encrypt('hacktiv8', 2)) // jcemvkx8
console.log(caesar_encrypt('xyz', 4)) // bcd
console.log(caesar_encrypt('aku anak sehat', 1)) // blv bobl tfibu

/*
RELEASE 2
-
Buat lah sebuah fungsi decrypt, dengan input sebuah string dan angka yang menunjukkan jumlah langkah mundur karakter.
Jika sampai huruf a, pemrosesan selanjutnya akan balik lagi ke z dan seterusnya

Contoh :
 */

function caesar_decrypt(str, num) {
    let kamus = `abcdefghijklmnopqrstuvwxyz`;
    let output = ``;

    for (let i = 0; i < str.length; i++) {
        let flag = false;
        for (let j = 0; j < kamus.length; j++) {
            if (str[i] === kamus[j]) {
                flag = true;
                if (j - num < 0) {
                    output += kamus[j - num + 26];
                    break;
                }
                output += kamus[j - num];
                break;
            }
        }
        if (flag) {
            continue;
        }
        output += str[i];
    }
    return output;
}

console.log(caesar_decrypt('jcemvkx8', 2)) // hacktiv8
console.log(caesar_decrypt('bcd', 4)) // xyz
console.log(caesar_decrypt('blv bobl tfibu', 1)) // aku anak sehat
