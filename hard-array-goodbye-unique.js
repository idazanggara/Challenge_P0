/* 
==
GOODBYE UNIQUE
==

RELEASE 1
-
Buatlah fungsi myIndexOf dengan parameter input array dan number. Fungsi akan mengembalikan index 
posisi number yang ditemukan pertama kali dalam array. Pencarian number dimulai dari AWAL array ke AKHIR array

Contoh : 
*/

function myIndexOf(array, num) {
    let output = 0;

    for (let i = 0; i < array.length; i++) {
        if (array[i] === num) {
            return i;
        }
    }
}


let arr = [1, 2, 3, 1, 2, 3, 4, 3, 2, 1]
console.log(myIndexOf(arr, 2)) // 1
console.log(myIndexOf(arr, 1)) // 0
console.log(myIndexOf(arr, 3)) // 2




/* 
RELEASE 2
-
Buatlah fungsi myLastIndexOf dengan parameter input array dan number. Fungsi akan mengembalikan index posisi 
number yang ditemukan pertama kali dalam array. Pencarian number dimulai dari AKHIR array ke AWAL array

Contoh : 
*/

function myLastIndexOf(array, num) {
    let output = 0;

    for (let i = array.length - 1; i >= 0; i--) {
        if (array[i] === num) {
            return i;
        }
    }
}

let arr1 = [1, 2, 3, 1, 2, 3, 4, 3, 2, 1]
console.log(myLastIndexOf(arr1, 2)) // 8
console.log(myLastIndexOf(arr1, 1)) // 9
console.log(myLastIndexOf(arr1, 3)) // 7


/*
RELEASE 3
-
Buatlah fungsi goodbyeUnique dengan parameter input berupa array. Fungsi ini akan menghapus semua angka yang unik 
( hanya ada 1 di dalam array ) tanpa merubah posisi dari elemen-elemen dalam array. Fungsi akan mengembalikan array yang sudah diolah.
HINT : kalian bisa memanfaatkan fungsi-fungsi yang sudah kalian buat di RELEASE sebelumnya

Contoh :
*/

function goodbyeUnique(array) {
    let output = [];

    for (let i = 0; i < array.length; i++) {
        let counter = 0;
        for (let j = 0; j < array.length; j++) {
            if (array[i] === array[j]) {
                counter++;
            }
        }
        if (counter > 1) {
            output.push(array[i]);
        }
    }
    return output;
}

console.log(goodbyeUnique([1, 2, 3, 4, 1, 2, 3])) // [1, 2, 3, 1, 2, 3]
console.log(goodbyeUnique([5, 4, 3])) // []
console.log(goodbyeUnique([3, 5, 3, 5, 3])) // [3, 5, 3, 5, 3]
