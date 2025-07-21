import { writable } from 'svelte/store';

export const studentsStore = writable([
  {
    id: 1,
    nim: '12S22013',
    nama: 'Christoffel Theofani Napitupulu',
    tempatLahir: 'Balige',
    tanggalLahir: '27-02-2004',
    jenisKelamin: 'Laki-laki',
    angkatan: '2022',
    prodi: 'Sistem Informasi',
    email: 'iss22013@students.del.ac.id',
    noHp: '082168249280'
  },

  { id: 2,
    nim: '11S22011',
    nama: 'Christian Theofani Napitupulu',
    tempatLahir: 'Balige',
    tanggalLahir: '27-02-2004',
    jenisKelamin: 'Laki-laki',
    angkatan: '2022',
    prodi: 'Informatika',
    email : 'ifs22011@students.del.ac.id',
    noHp: '081234567890'   
  },
  {
    id: 3,
    nim: '14S22040',
    nama: 'Stevanus Hutabarat',
    tempatLahir: 'Medan',
    tanggalLahir: '15-05-2004',
    jenisKelamin: 'Laki-laki',
    angkatan: '2022',
    prodi: 'Teknik Elektro',
    email: 'els22040@students.del.ac.id',
    noHp: '081234567890'
  },
  {
    id: 4,
    nim: '21S22040',
    nama: 'Rejeki Sitorus',
    tempatLahir: 'Medan',
    tanggalLahir: '20-06-2004',
    jenisKelamin: 'Laki-laki',
    angkatan: '2022',
    prodi: 'Manajemen Rekayasa',
    email: 'mrs22040@students.del.ac.id',
    noHp: '081234560978'
  },
  {
    id: 5,
    nim: '13322025',
    nama: 'Morlin Siahaan',
    tempatLahir: 'Medan',
    tanggalLahir: '10-07-2004',
    jenisKelamin: 'Perempuan',
    angkatan: '2022',
    prodi: 'Teknik Komputer',
    email: 'ce22025@students.del.ac.id',
    noHp: '081265437890'
  },
  {
    id: 6,
    nim: '22S23061',
    nama: 'Johan Hutabarat',
    tempatLahir: 'Medan',
    tanggalLahir: '05-08-2004',
    jenisKelamin: 'Laki-laki',
    angkatan: '2023',
    prodi: 'Metalurgi',
    email: 'tms23061@students.del.ac.id',
    noHp: '081234561234'
  },
  {
    id:7,
    nim: '31S22035',
    nama: 'Dimas Prasetyo',
    tempatLahir: 'Medan',
    tanggalLahir: '12-09-2004',
    jenisKelamin: 'Laki-laki',
    angkatan: '2022',
    prodi: 'Teknik Bioproses',
    email: 'bps22035@students.del.ac.id',
    noHp: '081267895432'
  },
  {
    id: 8,
    nim: '11422040',
    nama: 'Ricky Simanjuntak',
    tempatLahir: 'Medan',
    tanggalLahir: '30-10-2004',
    jenisKelamin: 'Laki-laki',
    angkatan: '2022',
    prodi: 'Sarjana Terapan Rekayasa Perangkat Lunak',
    email: 'if422040@students.del.ac.id',
    noHp: '081234567891'
  },
  {
    id: 9,
    nim: '11322024',
    nama: 'Christian Panjaitan',
    tempatLahir: 'Medan',
    tanggalLahir: '25-11-2004',
    jenisKelamin: 'Laki-laki',
    angkatan: '2022',
    prodi: 'Teknologi Informasi',
    email: 'if1322024@students.del.ac.id',
    noHp: '081234567899'
  }
]);
