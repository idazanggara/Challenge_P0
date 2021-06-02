/* 
Rekap Jurusan
===

Diberikan array of object dari data di TU kampus :
 */

function rekapJurusan(arr) {
    let output = {};

    for (let i = 0; i < arr.length; i++) {
        let { nama, jurusan, nilai } = arr[i];
        if (!output[jurusan]) {
            output[jurusan] = {
                mahasiswa: [],
                'rata-rata': 0
            }
        }
        output[jurusan].mahasiswa.push(nama);
        output[jurusan]['rata-rata'] += nilai;
    }

    for (let key in output) {
        output[key]['rata-rata'] /= output[key].mahasiswa.length;
    }

    return output;
}

console.log(rekapJurusan([
    {
        'nama': 'Adi',
        'jurusan': 'TI',
        'nilai': 80
    },
    {
        'nama': 'Bintang',
        'jurusan': 'Biologi',
        'nilai': 70
    },
    {
        'nama': 'Nanda',
        'jurusan': 'TI',
        'nilai': 90
    },
    {
        'nama': 'Rama',
        'jurusan': 'Elektro',
        'nilai': 80
    },
    {
        'nama': 'Reggi',
        'jurusan': 'TI',
        'nilai': 100
    },
    {
        'nama': 'Windy',
        'jurusan': 'Biologi',
        'nilai': 100
    },
]));

/*
Diminta untuk melakukan rekap per Jurusan sehingga data nya menjadi seperti ini :
{
  'TI': {
    'mahasiswa': ['Adi', 'Nanda', 'Reggi'],
    'rata-rata': 90
  },
  'Biologi': {
    'mahasiswa': ['Bintang', 'Windy],
    'rata-rata': 85
  },
  'Elektro': {
    'mahasiswa': ['Rama'],
    'rata-rata': 80
  }
}
 */
