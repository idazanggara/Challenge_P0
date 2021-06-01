/*
====
Menuju 1 digit
====
Input : diberikan sebuah angka multi digit
Proses : tambahkan semua digit dalam angka, masukkan ke dalam array output, proses berhenti ketika angka sudah 1 digit
Output : tampilkan seluruh angka yang terbentuk dari penjumlahan semua digit angka, hingga mendapat angka 1 digit

Contoh :
Input : 123
Output : [6]

Input : 999
Output : [27, 9]

Input : 542984
Output : [32, 5]

Input : 9992
Output : [29, 11, 2]
*/

function satuDigit(str) {
    let output = [];
    let string = String(str);

    while (string.length !== 1) {
        let number = 0;
        for (let i = 0; i < string.length; i++) {
            number += (Number(string[i]));
        }
        output.push(number);
        string = String(number);
    }
    return output;
}

console.log(satuDigit(123)); // Output : [6]

console.log(satuDigit(999)); // Output : [27, 9]

console.log(satuDigit(542984)); // Output : [32, 5]

console.log(satuDigit(9992)); // Output : [29, 11, 2]