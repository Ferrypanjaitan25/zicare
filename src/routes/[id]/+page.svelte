<script>
  import { page } from '$app/stores';
  import { studentsStore } from '$lib/stores/students';
  import { goto } from '$app/navigation';
  import { onMount } from 'svelte';
  import { get } from 'svelte/store';
  import StudentForm from '$lib/components/StudentForm.svelte';
  import Sidebar from '$lib/components/Sidebar.svelte';
  import jsPDF from 'jspdf';

  let student = null;
  let errorMessage = '';
  let successMessage = '';

  const prodiOptions = [
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

  onMount(() => {
    const id = +$page.params.id;
    studentsStore.subscribe(data => {
      student = data.find(s => s.id === id) ?? null;
    });
  });

  // Fungsi validasi modular
  function validateStudent(student) {
    if (!student) return 'Data mahasiswa tidak ditemukan!';

    const validations = [
      {
        condition: !student.nim || !student.nama || !student.tempatLahir || !student.tanggalLahir || !student.email || !student.noHp || !student.prodi || !student.angkatan,
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
        condition: !/^\d{11,13}$/.test(student.noHp),
        message: 'Nomor HP harus terdiri dari 11 hingga 13 angka!'
      },
      {
        condition: !/^\d{2,4}$/.test(student.angkatan),
        message: 'Angkatan harus terdiri dari 2 hingga 4 angka!'
      },
      {
        condition: !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(student.email),
        message: 'Format email tidak valid! Contoh: nim@students.del.ac.id'
      },
      {
        condition: student.nim.trim().length < 8 || student.nim.trim().length > 10,
        message: 'NIM harus terdiri dari 8 hingga 10 karakter!'
      }
    ];

    for (const { condition, message } of validations) {
      if (condition) return message;
    }
    return '';
  }

  function handleEdit() {
    errorMessage = '';
    successMessage = '';

    const validationError = validateStudent(student);
    if (validationError) {
      errorMessage = validationError;
      return;
    }

    const confirmEdit = confirm('Simpan perubahan data ini?');
    if (confirmEdit && student) {
      const updatedStudent = {
        id: student.id,
        nim: student.nim,
        nama: student.nama,
        tempatLahir: student.tempatLahir,
        tanggalLahir: student.tanggalLahir,
        email: student.email,
        noHp: student.noHp,
        prodi: student.prodi,
        angkatan: student.angkatan
      };
      studentsStore.update(data => data.map(s => s.id === updatedStudent.id ? updatedStudent : s));
      successMessage = 'Data berhasil diperbarui!';
      setTimeout(() => goto('/'), 1000);
    }
  }

  function downloadPDF() {
    if (!student) return;

    const doc = new jsPDF({ orientation: 'landscape', unit: 'mm', format: 'a4' });

    const logo = new Image();
    logo.src = '/logo-del.png';

    logo.onload = () => {
      doc.addImage(logo, 'PNG', 10, 10, 30, 30);
      doc.setFontSize(16);
      doc.text('Detail Mahasiswa', 148.5, 20, { align: 'center' });

      doc.setFontSize(12);
      doc.text(`NIM           : ${student.nim}`, 20, 50);
      doc.text(`Nama          : ${student.nama}`, 20, 60);
      doc.text(`Tempat Lahir  : ${student.tempatLahir}`, 20, 70);
      doc.text(`Tanggal Lahir : ${student.tanggalLahir || 'Tidak diketahui'}`, 20, 80);
      doc.text(`Prodi         : ${student.prodi}`, 20, 90);
      doc.text(`Email         : ${student.email}`, 20, 100);
      doc.text(`No. HP        : ${student.noHp}`, 20, 110);
      doc.text(`Angkatan      : ${student.angkatan}`, 20, 120);

      doc.save(`Detail-${student.nim}.pdf`);
    };

    logo.onerror = () => {
      alert('Gagal memuat logo. Pastikan logo-del.png ada di folder static.');
    };
  }
</script>

<div class="flex min-h-screen bg-gray-100">
  <Sidebar />
  {#if student}
    <div class="flex flex-1 items-center justify-center p-6">
      <div class="w-full max-w-2xl">
        <h1 class="mb-6 text-center text-2xl font-bold text-gray-800">Detail Mahasiswa</h1>
        <StudentForm
          bind:student
          {prodiOptions}
          {errorMessage}
          {successMessage}
          onSubmit={handleEdit}
        />
        <button
          type="button"
          on:click={downloadPDF}
          class="mt-4 w-full rounded bg-red-600 px-4 py-2 text-white transition hover:bg-red-700"
        >
          ⬇️ Download Data
        </button>
      </div>
    </div>
  {:else}
    <div class="flex flex-1 items-center justify-center p-6">
      <p class="text-center text-gray-500">Data mahasiswa tidak ditemukan.</p>
    </div>
  {/if}
</div>