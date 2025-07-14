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
    jenisKelamin: '',
    angkatan: '',
    email: '',
    noHp: '',
    prodi: ''
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

  let jenisKelaminOptions = ['Laki-laki', 'Perempuan'];

  let errorMessage = '';
  let successMessage = '';

  function isValidDate(dateStr) {
    const [day, month, year] = dateStr.split('-').map(Number);
    const date = new Date(year, month - 1, day);
    return date.getDate() === day && date.getMonth() + 1 === month && date.getFullYear() === year && year >= 1900;
  }

  function validateStudent(student) {
    const validations = [
      {
        condition: !student.nim || !student.nama || !student.tempatLahir || !student.tanggalLahir || !student.jenisKelamin || !student.angkatan || !student.email || !student.noHp || !student.prodi,
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
        condition: !isValidDate(student.tanggalLahir),
        message: 'Tanggal Lahir tidak valid!'
      },
      {
        condition: !['Laki-laki', 'Perempuan'].includes(student.jenisKelamin),
        message: 'Jenis Kelamin harus Laki-laki atau Perempuan!'
      },
      {
        condition: !/^\d{2,4}$/.test(student.angkatan),
        message: 'Angkatan harus terdiri dari 2 hingga 4 angka!'
      },
      {
        condition: !/^\d{11,13}$/.test(student.noHp),
        message: 'Nomor HP harus terdiri dari 11 hingga 13 angka!'
      },
      {
        condition: !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(student.email),
        message: 'Format email tidak valid! Contoh: iss22013@students.del.ac.id'
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
    ].sort((a, b) => a.prodi.localeCompare(b.prodi)));

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
        {jenisKelaminOptions}
        {errorMessage}
        {successMessage}
        onSubmit={handleSubmit}
      />
    </div>
  </div>
</div>