import { writable, type Writable } from 'svelte/store';

type Student = {
  id: number;
  nim: string;
  nama: string;
  tempatlahir: string;
  tanggalLahir: string;
  jeniskelamin: string;
  angkatan: string;
  prodi: string;
  email: string;
  noHp: string;
}

export const studentsStore: Writable<Array<Student>> = writable([
  {
    id: 1,
    nim: '12S22027',
    nama: 'Ferry Ando H O Panjaitan',
    tempatlahir: 'Medan',
    tanggalLahir: '25/10/2003',
    jeniskelamin: 'Laki-laki',
    angkatan: '2022',
    prodi: 'Sistem Informasi',
    email: 'iss22027@students.del.ac.id',
    noHp: '081260900151'
  },
]);
