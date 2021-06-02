/*
====
Balada Tuan Tanah
====
Tuan Postoro adalah tuan tanah dengan aset properti yang sangat banyak yang tersebar di banyak komplek. 
Kali ini dia menugaskan anak buahnya untuk berkeliling dan menuliskan laporan pendapatan dan pengeluaran dari semua properti nya, 
per komplek. Sang anak buah memberikan laporan berupa array, dan akunting Tuan Postoro akan mengkompillasi laporan nya.

Angka positif : mendapatkan pembayaran sewa sebesar angka dikali harga sewa properti, yaitu sebesar 100 dollar per properti
Angka negatif : harus membayar pajak sebesar 20 dollar per properti
Angka nol     : semua properti di komplek itu sedang kosong
*/

function tuanTanah(arr) {
    let cuan = 0;
    let pajak = 0;
    let kosong = 0;
    let output = ``;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            cuan += (100 * arr[i]);
            continue;
        }
        if (arr[i] < 0) {
            pajak += (Math.abs(arr[i]) * 20);
            continue;
        }
        kosong++;
    }

    output = `Tuan Postoro mendapat ${cuan} dollar, harus membayar pajak sebesar ${pajak} dollar, dan ada ${kosong} komplek yang kosong`;
    return output;
}

Contoh:
input = [1, 0, -1]
console.log(tuanTanah(input));
// output: Tuan Postoro mendapat 100 dollar, harus membayar pajak sebesar 20 dollar, dan ada 1 komplek yang kosong

input1 = [1, 1, 1]
console.log(tuanTanah(input1));
// output: Tuan Postoro mendapat 300 dollar, harus membayar pajak sebesar 0 dollar, dan ada 0 komplek yang kosong

input2 = [1, -2, 3, 0, 5]
console.log(tuanTanah(input2));
// output: Tuan Postoro mendapat 900 dollar, harus membayar pajak sebesar 40 dollar, dan ada 1 komplek yang kosong
