/* 
====
Twin Killer
====
Terjadi pembunuhan terhadap orang kembar yang menghebohkan. Keduanya dibunuh di tempat yang berbeda, 
namun sempat berkomunikasi untuk mengungkapkan nama pembunuhnya, yang, sayang sekali, seseorang yang mereka kenal.

Orang pertama memberikan kumpulan huruf yang diacak, dan orang kedua memberikan array yang berisi index dari huruf yang diacak, 
yang jika digabungkan, akan menghasilkan sebuah nama. Angka negatif akan menghasilkan spasi
 */

// Contoh :

function twinKiller(arr, word) {
    let output = ``;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            output += ` `;
            continue;
        }
        output += word[arr[i]];
    }
    return output;
}

kata1 = 'yudmjiqouabw'
array1 = [10, 7, 3, 5, -8, 4, 5, 11, 7]
console.log(twinKiller(array1, kata1));

// output : Nama pembunuhnya adalah : bomi jiwo

kata2 = 'poiuytlkjhgfaez'
array2 = [14, 3, 13, 6, 1, -3, 1, 11, -1, 12, 14, 8, 2, 0, 1, 9]
console.log(twinKiller(array2, kata2));


// output : Nama pembunuhnya adalah : zuelo of azjipoh
