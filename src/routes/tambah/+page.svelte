<script>
	import { studentsStore } from '$lib/stores/students';
	import { goto } from '$app/navigation';
	import StudentForm from '$lib/components/StudentForm.svelte';
	import Sidebar from '$lib/components/Sidebar.svelte';
	import { get } from 'svelte/store';

	let student = {
		nim: '',
		nama: '',
		tempatLahir: '',
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

	let errorMessage = '';
	let successMessage = '';

	function handleSubmit() {
		const nimLength = student.nim.trim().length;
		errorMessage = '';
		successMessage = '';

		if (!student.nim || !student.nama || !student.email || !student.noHp || !student.prodi) {
			errorMessage = 'Mohon lengkapi semua field!';
			return;
		}

		// Validasi nama hanya huruf dan spasi
		const namaPattern = /^[a-zA-Z\s]+$/;
		if (!namaPattern.test(student.nama)) {
			errorMessage = 'Nama hanya boleh berisi huruf dan spasi!';
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
		const isDuplicateNim = existingStudents.some((s) => s.nim === student.nim);

		if (isDuplicateNim) {
			errorMessage = 'NIM sudah terdaftar. Gunakan NIM lain.';
			return;
		}

		if (nimLength < 8 || nimLength > 10) {
			errorMessage = 'NIM harus terdiri dari 8 hingga 10 karakter!';
			return;
		}

		studentsStore.update((data) => [
			...data,
			{
				id: Date.now(),
				...student
			}
		]);

		successMessage = 'Data mahasiswa berhasil ditambahkan!';
		setTimeout(() => goto('/'), 1000);
	}
</script>

<div class="flex min-h-screen">
	<Sidebar />
	<div class="flex flex-1 items-center justify-center bg-gray-100 p-6">
		<div class="w-full max-w-2xl">
			<h1 class="mb-6 text-center text-2xl font-bold">Tambah Mahasiswa</h1>
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
