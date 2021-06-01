/* 
Buatlah fungsi dengan nama susunPesan, dengan parameter input berupa array 2 dimensi. 
Setiap elemen array akan berupa array yang berisi kata dan posisi nya. 
Tugas fungsi ini adalah untuk menghasilkan kalimat sesuai dengan posisi kata. 
Silakan menambahkan contoh soal lain jika merasa perlu

Contoh : 
*/
function susunPesan(arr) {
    let output = ``;
    let num = 1;

    while (num !== arr.length + 1) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i][1] === num) {
                if (num === arr.length) {
                    output += arr[i][0];
                    break;
                }
                output += `${arr[i][0]} `;
            }
        }
        num++;
    }
    return output;
}

console.log(susunPesan([
    ['besok', 4],
    ['kita', 1],
    ['akan', 2],
    ['menyerang', 3],
    ['pagi', 5],
]));

// outputnya : 'kita akan menyerang besok pagi'


console.log(susunPesan([
    ['granat', 3],
    ['musuh', 1],
    ['membawa', 2],
]));

// outputnya : 'musuh membawa granat'
