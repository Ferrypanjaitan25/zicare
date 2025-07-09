<script>
  import { studentsStore } from '$lib/stores/students';
  import { goto } from '$app/navigation';
  import { get } from 'svelte/store';
  import StudentForm from '$lib/components/StudentForm.svelte';
  import Sidebar from '$lib/components/Sidebar.svelte';

  let student = {
    nim: '',
    nama: '',
    tempatLahir: '',
    tanggalLahir: '',
    email: '',
    noHp: '',
    prodi: '',
    angkatan: ''
  };

  let prodiOptions = [
    'Sistem Informasi',
    'Teknologi Informasi',
    'Sarjana Terapan Rekayasa Perangkat Lunak',
    'Teknik Komputer',
    'Teknik Elektro',
    'Informatika',
    'Teknik Bioproses',
    'Metalurgi',
    'Manajemen Rekayasa'
  ].sort((a, b) => a.localeCompare(b));

  let errorMessage = '';
  let successMessage = '';

<<<<<<< Updated upstream
  // Fungsi validasi modular
  function validateStudent(student) {
    const validations = [
      {
        condition: !student.nim || !student.nama || !student.tempatLahir || !student.tanggalLahir || !student.email || !student.noHp || !student.prodi || !student.angkatan,
=======
  function validateStudent(student) {
    const validations = [
      {
        condition: !student.nim || !student.nama || !student.tempatLahir || !student.tanggalLahir || !student.jenisKelamin || !student.angkatan || !student.email || !student.noHp || !student.prodi,
>>>>>>> Stashed changes
        message: 'Mohon lengkapi semua field!'
      },
      {
        condition: !/^[a-zA-Z\s]+$/.test(student.nama),
        message: 'Nama hanya boleh berisi huruf dan spasi!'
      },
      {
        condition: !/^[a-zA-Z\s]+$/.test(student.tempatLahir),
        message: 'Tempat Lahir hanya boleh berisi huruf dan spasi!'
      },
      {
        condition: !/^\d{2}-\d{2}-\d{4}$/.test(student.tanggalLahir),
        message: 'Tanggal Lahir harus dalam format DD-MM-YYYY!'
      },
      {
<<<<<<< Updated upstream
        condition: !/^\d{11,13}$/.test(student.noHp),
        message: 'Nomor HP harus terdiri dari 11 hingga 13 angka!'
=======
        condition: !['Laki-laki', 'Perempuan'].includes(student.jenisKelamin),
        message: 'Jenis Kelamin harus Laki-laki atau Perempuan!'
>>>>>>> Stashed changes
      },
      {
        condition: !/^\d{2,4}$/.test(student.angkatan),
        message: 'Angkatan harus terdiri dari 2 hingga 4 angka!'
      },
      {
<<<<<<< Updated upstream
        condition: !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(student.email),
        message: 'Format email tidak valid! Contoh: nim@students.del.ac.id'
=======
        condition: !/^\d{11,13}$/.test(student.noHp),
        message: 'Nomor HP harus terdiri dari 11 hingga 13 angka!'
      },
      {
        condition: !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(student.email),
        message: 'Format email tidak valid! Contoh: iss22013@students.del.ac.id'
>>>>>>> Stashed changes
      },
      {
        condition: student.nim.trim().length < 8 || student.nim.trim().length > 10,
        message: 'NIM harus terdiri dari 8 hingga 10 karakter!'
      },
      {
        condition: get(studentsStore).some(s => s.nim === student.nim),
        message: 'NIM sudah terdaftar. Gunakan NIM lain.'
      }
    ];

    for (const { condition, message } of validations) {
      if (condition) return message;
    }
    return '';
  }

  function handleSubmit() {
    errorMessage = '';
    successMessage = '';

    const validationError = validateStudent(student);
    if (validationError) {
      errorMessage = validationError;
      return;
    }

    studentsStore.update(data => [
      ...data,
      {
        id: Date.now(),
        ...student
      }
<<<<<<< Updated upstream
    ]);
=======
    ].sort((a, b) => a.prodi.localeCompare(b.prodi)));
>>>>>>> Stashed changes

    successMessage = 'Data mahasiswa berhasil ditambahkan!';
    setTimeout(() => goto('/'), 1000);
  }
</script>

<div class="flex min-h-screen bg-gray-100">
  <Sidebar />
  <div class="flex flex-1 items-center justify-center p-6">
    <div class="w-full max-w-2xl">
      <h1 class="mb-6 text-center text-2xl font-bold text-gray-800">Tambah Mahasiswa</h1>
      <StudentForm
        bind:student
        {prodiOptions}
        {errorMessage}
        {successMessage}
        onSubmit={handleSubmit}
      />
    </div>
  </div>
</div>