/*
Buatlah sebuah function bernama myBubbleSort yang akan menerima sebuah array of number. 
Implementasikan algoritma bubble sort yang di improve dengan menggunakan flagging. 
Flagging dipakai untuk menentukan apakah pada iterasi terakhir ada dilakukan value switching ( penukaran nilai ). 
Jika tidak ada, maka tidak perlu melakukan iterasi lagi setelahnya, jika masih ada

Algoritma bubble sort nya silakan dicari via googling :P
*/

function myBubbleSort(arr) {
    let flag = true;

    while (flag) {
        let counter = 0;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > arr[i + 1]) {
                let item = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = item;
                counter++;
            }
        }
        if (counter === 0) {
            flag = false;
        }
    }
    return arr;
}

let input = [1, 2, 3, 56, 2, 55, 7, 4, 77, 4, 3, 2, 1]

console.log(myBubbleSort(input))
// [1, 1, 2, 2, 2, 3, 3, 4, 4, 7, 55, 56, 77]
