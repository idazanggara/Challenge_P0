/*
Buatlah sebuah function catchTheWord yang akan menerima input berupa array 2 dimensi. 
Ambil huruf dari tiap nested array dan rangkaikan jadi 1 kalimat. Hiraukan semua spasi. 
Dan jika di nested array tersebut tidak ada huruf, tidak usah ambil apapun
*/
function catchTheWord(arr) {
    let output = ``;

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] !== ` `) {
                output += arr[i][j];
            }
        }
    }
    return output;
}

let arr_str = [
    [' ', 'H', ' '],
    ['a', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', 'c', ' ', ' '],
    [' ', ' ', 'k', ' ', ' '],
    [' ', ' ', 't', ' '],
    [' ', ' ', 'i', ' ', ' '],
    [' ', ' ', ' ', 'v', ' '],
    [' '],
    [' ', ' ', ' ', ' ', '8']
]

console.log(catchTheWord(arr_str)) // Hacktiv8