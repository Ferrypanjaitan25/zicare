import { writable } from 'svelte/store';

export const studentsStore = writable([
  {
    id: 1,
    nim: '12S22027',
    nama: 'Ferry Ando H.O Panjaitan',
    prodi: 'Sistem Informasi',
    email: 'iss22027@students.del.ac.id',
    noHp: '081260900151'
  },
  
  {
    id: 2,
    nim: '11S22013',
    nama: 'Christoffel Theofani Napitupulu',
    prodi: 'Informatika',
    email: 'ifs22013@students.del.ac.id',
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
    noHp: '081234567890'
  },
  {
    id: 5,
    nim: '13322025',
    nama: 'Morlin Siahaan',
    prodi: 'Teknik Komputer',
    email: 'ce22025@students.del.ac.id',
    noHp: '081234567890'
  },
  {
    id: 6,
    nim: '22S23061',
    nama: 'Johan Hutabarat',
    prodi: 'Teknik Metalurgi',
    email: 'tms22061@students.del.ac.id',
    noHp: '081234567890'
  },
  {
    id:7,
    nim: '31S22040',
    nama: 'Stevanus Hutabarat',
    prodi: 'Teknik Bioproses',
    email: 'bps22040@students.del.ac.id',
    noHp: '081234567890'
  },
  {
    id: 8,
    nim: '11422040',
    nama: 'Stevanus Hutabarat',
    prodi: 'Teknik Rekaya Perangkat Lunak',
    email: 'if422040@students.del.ac.id',
    noHp: '081234567890'
  },
  {
    id: 9,
    nim: '11322024',
    nama: 'Stevanus Hutabarat',
    prodi: 'Teknik Elektro',
    email: 'ti22040@students.del.ac.id',
    noHp: '081234567890'
  }
]);
