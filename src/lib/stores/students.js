import { writable } from 'svelte/store';

export const studentsStore = writable([
  {
    id: 1,
    nim: '12S22027',
    nama: 'Ferry Ando H O Panjaitan',
    tempatLahir: 'Medan',
    tanggalLahir: '25/10/2003',
    jenisKelamin: 'Laki-laki',
    angkatan: '2022',
    prodi: 'Sistem Informasi',
    email: 'iss22027@students.del.ac.id',
    noHp: '081260900151'
  },
  
]);

;
