/*
===
URL Parser
===
Buatlah sebuah fungsi yang bernama urlParser, yang akan menerima input sebuah URL. 
Format URL adalah 'protocol://domain/username. 
Kemudian fungsi ini akan menghasilkan objek yang merupakan hasil parser dari URL yang di input. 
Jika username kosong, maka keluarkan tulisan : "not available" pada key username

Contoh ada pada driver code di bawah :
*/

function urlParser(str) {
    let output = {};
    let array = [];
    let sentence = ``;

    for (let i = 0; i < str.length; i++) {
        if (str[i] !== `/` && str[i] !== `:`) {
            sentence += str[i];
        }
        if (sentence.length !== 0 && str[i] === `/` || i === str.length - 1) {
            array.push(sentence);
            sentence = '';
        }
    }

    for (let i = 0; i < 3; i++) {
        if (!array[i]) {
            array[i] = `not available`;
        }
        switch (i) {
            case 0:
                output.protocol = array[i];
                break;
            case 1:
                output.domain = array[i];
                break;
            case 2:
                output.username = array[i];
                break;
        }
    }
    return output;
}

console.log(urlParser('https://facebook.com/foo'))
// {
//   protocol: 'https',
//   domain: 'facebook.com',
//   username: 'foo'
// }

console.log(urlParser('http://imgur.co.id/'))
// {
//   protocol: 'http',
//   domain: 'imgur.co.id',
//   username: 'not available'
// }