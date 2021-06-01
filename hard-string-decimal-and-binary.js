/*
Buatlah 2 buah fungsi :

1. decimalToBinary => untuk merubah sebuah ANGKA desimal menjadi string binary
2. binaryToDecimal => untuk merubah sebuah STRING binary menjadi angka desimal

CATATAN : input selalu ada dan valid
*/

// Algoritma bisa dilihat di https://www.rapidtables.com/convert/number/decimal-to-binary.html
function decimalToBinary(angka) {
    // your code here
    let output = ``;
    let array = [];

    if (angka === 0) {
        output = `0`;
        return output;
    }

    while (angka !== 0) {
        array.unshift(angka % 2);
        angka = Math.floor(angka / 2);
    }

    for (let i = 0; i < array.length; i++) {
        output += array[i];
    }
    return output;
}

console.log(decimalToBinary(0))  // 0
console.log(decimalToBinary(1))  // 1
console.log(decimalToBinary(2))  // 10
console.log(decimalToBinary(5))  // 101
console.log(decimalToBinary(20)) // 10100

// Algoritma bisa dilihat di https://www.rapidtables.com/convert/number/binary-to-decimal.html
function binaryToDecimal(binary) {
    let output = 0;
    let array = [];
    let binaryIndex = binary.length - 1;

    for (let i = 0; i < binary.length; i++) {
        array.push(Number(binary[i]));
    }

    for (let i = 0; i < array.length; i++) {
        output += (array[i] * (2 ** binaryIndex));
        binaryIndex--;
    }

    return output;
}

console.log(binaryToDecimal('0'))     // 0
console.log(binaryToDecimal('1'))     // 1
console.log(binaryToDecimal('101'))   // 5
console.log(binaryToDecimal('11011')) // 27