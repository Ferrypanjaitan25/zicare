<script lang="ts">
  import { studentsStore } from '$lib/stores/students';
  import { goto } from '$app/navigation';
  import StudentForm from '$lib/components/StudentForm.svelte';
  import { get } from 'svelte/store';

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
  ];

  let jenisKelaminOptions = ['Laki-laki', 'Perempuan'];

  let errorMessage = '';
  let successMessage = '';
  let isAgeValid = true;

  function handleSubmit() {
    const nimLength = student.nim.trim().length;
    errorMessage = '';
    successMessage = '';

    if (
      !student.nim ||
      !student.nama ||
      !student.tempatLahir ||
      !student.tanggalLahir ||
      !student.jenisKelamin ||
      !student.angkatan ||
      !student.email ||
      !student.noHp ||
      !student.prodi
    ) {
      errorMessage = 'Mohon lengkapi semua field!';
      return;
    }

    if (!isAgeValid) {
      errorMessage = 'Usia minimal 19 tahun. Tidak memenuhi syarat.';
      return;
    }

    const namaPattern = /^[a-zA-Z\s]+$/;
    if (!namaPattern.test(student.nama)) {
      errorMessage = 'Nama hanya boleh berisi huruf dan spasi!';
      return;
    }

    if (!namaPattern.test(student.tempatLahir)) {
      errorMessage = 'Tempat Lahir hanya boleh berisi huruf dan spasi!';
      return;
    }

    const noHpPattern = /^\d{11,13}$/;
    if (!noHpPattern.test(student.noHp)) {
      errorMessage = 'Nomor HP harus terdiri dari 11 hingga 13 angka!';
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(student.email)) {
      errorMessage = 'Format email tidak valid! Contoh: nim@students.del.ac.id';
      return;
    }

    const existingStudents = get(studentsStore);
    const isDuplicateNim = existingStudents.some(s => s.nim === student.nim);
    if (isDuplicateNim) {
      errorMessage = 'NIM sudah terdaftar. Gunakan NIM lain.';
      return;
    }

    if (nimLength < 8 || nimLength > 10) {
      errorMessage = 'NIM harus terdiri dari 8 hingga 10 karakter!';
      return;
    }

    studentsStore.update(data => {
      const newStudent = {
        id: Date.now(),
        nim: student.nim,
        nama: student.nama,
        tempatlahir: student.tempatLahir, 
        tanggalLahir: student.tanggalLahir,
        jeniskelamin: student.jenisKelamin, 
        angkatan: student.angkatan,
        email: student.email,
        noHp: student.noHp,
        prodi: student.prodi
      };

      const newData = [
        ...data,
        newStudent
      ];
      return newData.sort((a, b) => a.prodi.localeCompare(b.prodi));
    });

    successMessage = 'Data mahasiswa berhasil ditambahkan!';
    setTimeout(() => goto('/'), 1000);
  }
</script>

  <div class="flex flex-1 items-center justify-center bg-gray-100 p-6">
    <div class="w-full max-w-2xl">
      <h1 class="mb-6 text-center text-2xl font-bold">Tambah Mahasiswa</h1>
      <StudentForm
        bind:student
        {prodiOptions}
        {jenisKelaminOptions}
        {errorMessage}
        {successMessage}
        onSubmit={handleSubmit}
        on:ageValidation={(e) => isAgeValid = e.detail.valid}
      />
    </div>
  </div>
