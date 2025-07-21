<script>
  import { page } from '$app/stores';
  import { studentsStore } from '$lib/stores/students';
  import { goto } from '$app/navigation';
  import { onMount } from 'svelte';
  import { get } from 'svelte/store';
  import StudentForm from '$lib/components/StudentForm.svelte';
  import jsPDF from 'jspdf';

  let student = null;
  let errorMessage = '';
  let successMessage = '';

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
  prodiOptions = prodiOptions.sort((a, b) => a.localeCompare(b));

  let jenisKelaminOptions = [
    'Laki-laki', 
    'Perempuan'
  ]; 

  onMount(() => {
    const id = +$page.params.id;
    studentsStore.subscribe(data => {
      student = data.find(s => s.id === id) ?? null;
    });
  });

  function handleEdit() {
    errorMessage = '';
    successMessage = '';

    if (!student) {
      errorMessage = 'Data mahasiswa tidak ditemukan!';
      return;
    }

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

    // Validasi nama hanya huruf dan spasi
    const namaPattern = /^[a-zA-Z\s]+$/;
    if (!namaPattern.test(student.nama)) {
      errorMessage = 'Nama hanya boleh berisi huruf dan spasi!';
      return;
    }

    // Validasi tempat lahir hanya huruf dan spasi
    if (!namaPattern.test(student.tempatLahir)) {
      errorMessage = 'Tempat Lahir hanya boleh berisi huruf dan spasi!';
      return;
    }

    if (!student.tanggalLahir) {
      errorMessage = 'Tanggal Lahir tidak boleh kosong!';
      return;
    }

    if (!student.angkatan) {
      errorMessage = 'Angkatan tidak boleh kosong!';
      return;
    }


    const nimLength = student.nim.trim().length;
    if (nimLength < 8 || nimLength > 10) {
      errorMessage = 'NIM harus terdiri dari 8 hingga 10 karakter!';
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

    const confirmEdit = confirm('Simpan perubahan data ini?');
    if (confirmEdit && student) {
      const updatedStudent = {
        id: student.id,
        nim: student.nim,
        nama: student.nama,
        tempatLahir: student.tempatLahir,
        tanggalLahir: student.tanggalLahir,
        jenisKelamin: student.jenisKelamin,
        angkatan: student.angkatan,
        email: student.email,
        noHp: student.noHp,
        prodi: student.prodi,
       
      };
      // @ts-ignore
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
      if (!student) return;
      doc.addImage(logo, 'PNG', 10, 10, 30, 30);

      doc.setFontSize(16);
      doc.text('Detail Mahasiswa', 148.5, 20, { align: 'center' });

      doc.setFontSize(12);
      doc.text(`NIM        : ${student.nim}`, 20, 50);
      doc.text(`Nama       : ${student.nama}`, 20, 60);
      doc.text(`Tempat Lahir : ${student.tempatLahir}`, 20, 70);
      doc.text(`Tanggal Lahir : ${student.tanggalLahir}`, 20, 75);
      doc.text(`Jenis Kelamin : ${student.jenisKelamin}`, 20, 80);
      doc.text(`Angkatan  : ${student.angkatan}`, 20, 85);
      doc.text(`Prodi      : ${student.prodi}`, 20, 80);
      doc.text(`Email      : ${student.email}`, 20, 90);
      doc.text(`No. HP     : ${student.noHp}`, 20, 100);
      doc.save(`Detail-${student.nim}.pdf`);
    };

    logo.onerror = () => {
      alert('Gagal memuat logo. Pastikan logo-del.png ada di folder static.');
    };
  }
</script>
  
  {#if student}
    <div class="flex-1 flex items-center justify-center p-6 bg-gray-100">
      <div class="w-full max-w-2xl">
        <h1 class="text-2xl font-bold text-center mb-6">Detail Mahasiswa</h1>
        <StudentForm
          bind:student
          {prodiOptions}
          {jenisKelaminOptions}
          {errorMessage}
          {successMessage}
          onSubmit={handleEdit}
        />
        <button
          type="button"
          on:click={downloadPDF}
          class="w-full mt-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
        >
          ⬇️ Download Data
        </button>
      </div>
    </div>
  {:else}
    <div class="flex-1 flex items-center justify-center p-6 bg-gray-100">
      <p class="text-center text-gray-500">Data mahasiswa tidak ditemukan.</p>
    </div>
  {/if}