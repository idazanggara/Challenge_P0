/*
===
Frequency Distribution
===
Buatlah sebuah fungsi yang bernama getFrequencies yang akan melakukan pelaporan rangkuman atas nilai-nilai yang tesebar dalam sebuah array

Contoh :
getFrequencies(["A", "B", "A", "A", "A"]) // { A: 4, B: 1 }

getFrequencies([1, 2, 3, 3, 2]) // { "1": 1, "2": 2, "3": 2 }

getFrequencies([true, false, true, false, false]) // { true: 2, false: 3 }

getFrequencies([]) // {}
*/

function frequency(array) {
    let output = {};

    if (array.length === 0) {
        return output;
    }

    for (let i = 0; i < array.length; i++) {
        if (!output[array[i]]) {
            output[array[i]] = 0;
        }
        output[array[i]]++;
    }
    return output;
}

console.log(frequency(["A", "B", "A", "A", "A"])); // { A: 4, B: 1 }

console.log(frequency([1, 2, 3, 3, 2])); // { "1": 1, "2": 2, "3": 2 }

console.log(frequency([true, false, true, false, false])); // { true: 2, false: 3 }

console.log(frequency([])); // {}