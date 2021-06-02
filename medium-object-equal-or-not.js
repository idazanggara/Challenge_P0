/*
===
Equal or Not
===
Buatlah sebuah fungsi isEqual yang akan menerima input 2 buah objek. 
Fungsi ini akan mencari tahu apakah 2 buah objek tersebut termasuk equal atau tidak.

Syarat equal :
- memiliki jumlah key yang sama
- memiliki nama-nama key yang sama

HINT : hiraukan huruf kapital atau tidak, contoh nama key 'Name' dan 'name' dianggap sama
*/
function isEqual(a, b) {
    let keysA = Object.keys(a);
    let keysB = Object.keys(b);

    if (keysA.length !== keysB.length) {
        return false;
    }

    for (let i = 0; i < keysA.length; i++) {
        if (keysA[i].toLowerCase() !== keysB[i].toLowerCase()) {
            return false;
        }
    }
    return true;
}

let a
let b

a = {
    foo: 1,
    bar: 2
}

b = {
    Foo: 8,
    bAR: 100
}

console.log(isEqual(a, b)) // true

a = {
    foo: 1,
    bar: 2,
    yeah: 9
}

b = {
    Foo: 8,
    bAR: 100
}

console.log(isEqual(a, b)) // false

a = {
    foo: 1,
    bar: 2
}

b = {
    Foo: 8,
    bARe: 100
}

console.log(isEqual(a, b)) // false