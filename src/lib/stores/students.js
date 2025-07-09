import { writable } from 'svelte/store';

export const studentsStore = writable([
  {
    id: 1,
    nim: '12S22013',
    nama: 'Christoffel Theofani Napitupulu',
    prodi: 'Sistem Informasi',
    email: 'iss22013@students.del.ac.id',
    noHp: '082168249280'
  },

  {
    id: 2,
    nim: '11S22011',
    nama: 'Christian Theofani Napitupulu',
    prodi: 'Informatika',
    email: 'ifs22011@students.del.ac.id',
    noHp: '082112345678'
  },
  {
    id: 3,
    nim: '14S22040',
    nama: 'Stevanus Hutabarat',
    prodi: 'Teknik Elektro',
    email: 'els22040@students.del.ac.id',
    noHp: '081234567890'
  },
  {
    id: 4,
    nim: '21S22040',
    nama: 'Rejeki Sitorus',
    prodi: 'Manajemen Rekayasa',
    email: 'mrs22040@students.del.ac.id',
    noHp: '081234560978'
  },
  {
    id: 5,
    nim: '13322025',
    nama: 'Morlin Siahaan',
    prodi: 'Teknik Komputer',
    email: 'ce22025@students.del.ac.id',
    noHp: '081265437890'
  },
  {
    id: 6,
    nim: '22S23061',
    nama: 'Johan Hutabarat',
    prodi: 'Metalurgi',
    email: 'tms23061@students.del.ac.id',
    noHp: '081234561234'
  },
  {
    id:7,
    nim: '31S22035',
    nama: 'Dimas Prasetyo',
    prodi: 'Teknik Bioproses',
    email: 'bps22035@students.del.ac.id',
    noHp: '081267895432'
  },
  {
    id: 8,
    nim: '11422040',
    nama: 'Ricky Simanjuntak',
    prodi: 'Sarjana Terapan Rekayasa Perangkat Lunak',
    email: 'if422040@students.del.ac.id',
    noHp: '081234567891'
  },
  {
    id: 9,
    nim: '11322024',
    nama: 'Christian Panjaitan',
    prodi: 'Teknologi Informasi',
    email: 'if1322024@students.del.ac.id',
    noHp: '081234567899'
  }
]);
