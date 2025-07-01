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
    nim: '12S22013',
    nama: 'Christoffel Theofani Napitupulu',
    prodi: 'Sistem Informasi',
    email: '12S22013@students.del.ac.id',
    noHp: '082168249280'
  }
]);
