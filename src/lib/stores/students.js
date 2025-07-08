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
  {
    id: 2,
    nim: '12S22049',
    nama: 'Febby Siahaan',
    tempatLahir: 'Medan',
    tanggalLahir: '25/10/2003',
    jenisKelamin: 'Perempuan',
    angkatan: '2022',
    prodi: 'Sistem Informasi',
    email: 'iss22049@students.del.ac.id',
    noHp: '081260900151'
  },
  {
    id: 3,
    nim: '11S22013',
    nama: 'Christoffel Theofani Napitupulu',
    tempatLahir: 'Purwakarta',
    tanggalLahir: '01/01/2003',
    jenisKelamin: 'Laki-laki',
    angkatan: '2022',
    prodi: 'Informatika',
    email: 'ifs22013@students.del.ac.id',
    noHp: '082112345678'
  },

  {
    id: 4,
    nim: '11S22055',
    nama: 'Samuel Sibarani  ',
    tempatLahir: 'Purwakarta',
    tanggalLahir: '01/01/2003',
    jenisKelamin: 'Laki-laki',
    angkatan: '2022',
    prodi: 'Informatika',
    email: 'ifs22055@students.del.ac.id',
    noHp: '082112345678'
  },
  {
    id: 5,
    nim: '14S22040',
    nama: 'Stevanus Hutabarat',
    tempatLahir: 'Sragen',
    tanggalLahir: '15/05/2003',
    jenisKelamin: 'Laki-laki',
    angkatan: '2022',
    prodi: 'Teknik Elektro',
    email: 'els22040@students.del.ac.id',
    noHp: '081234567890'
  },

   {
    id: 6,
    nim: '14S22012',
    nama: 'Boy Hutabarat',
    tempatLahir: 'Humbang Hasundutan',
    tanggalLahir: '15/05/2003',
    jenisKelamin: 'Laki-laki',
    angkatan: '2022',
    prodi: 'Teknik Elektro',
    email: 'els22012@students.del.ac.id',
    noHp: '081234567890'
  },

  {
    id: 7,
    nim: '21S22040',
    nama: 'Rejeki Sitorus',
    tempatLahir: 'majalengka',
    tanggalLahir: '20/08/2003',
    jenisKelamin: 'Laki-laki',
    angkatan: '2022',
    prodi: 'Manajemen Rekayasa',
    email: 'mrs22040@students.del.ac.id',
    noHp: '081234560978'
  },
  {
    id: 8,
    nim: '21S22043',
    nama: 'Sri Wahyuni Sitorus',
    tempatLahir: 'yogyakarta',
    tanggalLahir: '20/08/2003',
    jenisKelamin: 'Perempuan',
    angkatan: '2022',
    prodi: 'Manajemen Rekayasa',
    email: 'mrs22043@students.del.ac.id',
    noHp: '081234560978'
  },
  {
    id: 9,
    nim: '13322025',
    nama: 'Morlin Siahaan',
    tempatLahir: 'parparean',
    tanggalLahir: '30/09/2003',
    jenisKelamin: 'Perempuan',
    angkatan: '2022',
    prodi: 'Teknik Komputer',
    email: 'ce22025@students.del.ac.id',
    noHp: '081265437890'
  },
  {
    id: 10,
    nim: '13322009',
    nama: 'Anggreini Siahaan',
    tempatLahir: 'parparean',
    tanggalLahir: '30/09/2003',
    jenisKelamin: 'Perempuan',
    angkatan: '2022',
    prodi: 'Teknik Komputer',
    email: 'ce22009@students.del.ac.id',
    noHp: '081265437890'
  },
  {
    id: 11,
    nim: '22S23061',
    nama: 'Johan Hutabarat',
    tempatLahir: 'Medan',
    tanggalLahir: '12/12/2003',
    jenisKelamin: 'Laki-laki',
    angkatan: '2023',    
    prodi: 'Metalurgi',
    email: 'tms23061@students.del.ac.id',
    noHp: '081234561234'
  },
  {
    id: 12,
    nim: '22S23034',
    nama: 'Doli  Hutabarat',
    tempatLahir: 'Jakarta Barat',
    tanggalLahir: '12/12/2003',
    jenisKelamin: 'Laki-laki',
    angkatan: '2023',    
    prodi: 'Metalurgi',
    email: 'tms23034@students.del.ac.id',
    noHp: '081234561234'
  },
  {
    id:13,
    nim: '31S22035',
    nama: 'Dimas Prasetyo',
    tempatLahir: 'Bandung',
    tanggalLahir: '05/11/2003',
    jenisKelamin: 'Laki-laki',
    angkatan: '2022',
    prodi: 'Teknik Bioproses',
    email: 'bps22035@students.del.ac.id',
    noHp: '081267895432'
  },
  {
    id:14,
    nim: '31S22015',
    nama: 'Bima Prasetyo',
    tempatLahir: 'Bandung',
    tanggalLahir: '05/11/2003',
    jenisKelamin: 'Laki-laki',
    angkatan: '2022',
    prodi: 'Teknik Bioproses',
    email: 'bps22015@students.del.ac.id',
    noHp: '081267895432'
  },
  {
    id: 15,
    nim: '11422040',
    nama: 'Ricky Simanjuntak',
    tempatLahir: 'Medan',
    tanggalLahir: '22/02/2003',
    jenisKelamin: 'Laki-laki',
    angkatan: '2022',
    prodi: 'Sarjana Terapan Rekayasa Perangkat Lunak',
    email: 'if422040@students.del.ac.id',
    noHp: '081234567891'
  },
   {
    id: 16,
    nim: '11422010',
    nama: 'Ricky Ambarita',
    tempatLahir: 'Medan',
    tanggalLahir: '22/02/2003',
    jenisKelamin: 'Laki-laki',
    angkatan: '2022',
    prodi: 'Sarjana Terapan Rekayasa Perangkat Lunak',
    email: 'if422010@students.del.ac.id',
    noHp: '081234567891'
  },
  {
    id: 17,
    nim: '11322024',
    nama: 'Christian Panjaitan',
    tempatLahir: 'Medan',
    tanggalLahir: '18/03/2003',
    jenisKelamin: 'Laki-laki',  
    angkatan: '2022',
    prodi: 'Teknologi Informasi',
    email: 'if1322024@students.del.ac.id',
    noHp: '081234567899'
  },
   {
    id: 18,
    nim: '11322034',
    nama: 'Tagor Panjaitan',
    tempatLahir: 'switzerland',
    tanggalLahir: '18/03/2003',
    jenisKelamin: 'Laki-laki',  
    angkatan: '2022',
    prodi: 'Teknologi Informasi',
    email: 'if1322034@students.del.ac.id',
    noHp: '081234567899'
  }
]);

;
