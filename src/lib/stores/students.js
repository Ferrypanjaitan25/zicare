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
    nim: '14S23024',
    nama: 'Cardolan Sinaga',
    prodi: 'Teknik Elektro',
    email: '14S23024@students.del.ac.id',
    noHp: '082112345678'
  }
]);
