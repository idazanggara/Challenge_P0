/*
Pada soal ini kalian diminta untuk menganalisa output
Console.log dilakukan langsung di dalam function, tidak perlu pakai return
Asumsi input bilangan dari 1 smp tak hingga
*/

function star(num) {
    let length = 1;


    for (let i = 1; i < num; i++) {
        length += 2;
    }

    length *= 3;

    let middle = Math.floor(length / 2);
    let start1 = middle;
    let end1 = middle;

    for (let i = 0; i < num; i++) {
        let sentence = ``;
        for (let j = 0; j < length; j++) {
            if (j >= start1 && j <= end1) {
                sentence += `*`;
                continue;
            }
            sentence += ` `;
        }
        start1--;
        end1++;
        console.log(sentence);
    }

    let start2 = 0;
    let end2 = length - 1;

    for (let i = 0; i < num; i++) {
        let sentence = ``;
        for (let j = 0; j < length; j++) {
            if (j >= start2 && j <= end2) {
                sentence += `*`;
                continue;
            }
            sentence += ` `;
        }
        start2 += 2;
        end2 -= 2;
        console.log(sentence);
    }
    return ``;
}

console.log(star(1));
//  *
// ***

console.log(star(2));
//     *
//    ***
// *********
//   *****

console.log(star(3));
//        *
//       ***
//      *****
// ***************
//   ***********
//     *******

console.log(star(4));
//           *
//          ***
//         *****
//        *******
// *********************
//   *****************
//     *************
//       *********

console.log(star(5));
//              *
//             ***
//            *****
//           *******
//          *********
// ***************************
//   ***********************
//     *******************
//       ***************
//         ***********
