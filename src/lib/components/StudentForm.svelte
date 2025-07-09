<script>
	import Notification from './Notification.svelte';
	import Inputnumberonly from './InputNumberOnly.svelte';
	import InputTextOnly from './InputTextOnly.svelte';
	import InputSelect from './InputSelect.svelte'; 
	import InputFreeTextOnly from './InputFreeTextOnly.svelte';
	import FlatpickrInput from './FlatpickrInput.svelte';
	import { createEventDispatcher } from 'svelte';

	export let student = {
		nim: '',
		nama: '',
		tempatLahir: '',
		tanggalLahir: '',
		jenisKelamin: '',
		angkatan: '',
		prodi: '',
		email: '',
		noHp: ''
	};

	export let prodiOptions = [];
	prodiOptions = prodiOptions.sort((a, b) => a.localeCompare(b));

	export let jenisKelaminOptions = [];
	export let onSubmit = () => {};
	export let errorMessage = '';
	export let successMessage = '';

	const dispatch = createEventDispatcher();

	// Handler untuk meneruskan validasi umur ke parent (create.svelte)
	function handleAgeValidation(e) {
		dispatch('ageValidation', e.detail);
	}
</script>

<div class="mx-auto max-w-2xl rounded-lg border border-gray-200 bg-white p-6 shadow-md">
	{#if errorMessage}
		<Notification message={errorMessage} type="error" />
	{/if}

	{#if successMessage}
		<Notification message={successMessage} type="success" />
	{/if}

	<form on:submit|preventDefault={onSubmit} class="space-y-4">
		<div class="grid grid-cols-1 gap-4 md:grid-cols-2">
			<!-- Kolom Kiri -->
			<div class="space-y-4">
				<InputFreeTextOnly
					bind:value={student.nim}
					fieldName="NIM"
					fieldLabel="nim"
					isRequired={true}
					inputType="nim"
				/>

				<InputTextOnly
					bind:value={student.nama}
					fieldLabel="nama-lengkap"
					isRequired={true}
				/>

				<InputTextOnly
					bind:value={student.tempatLahir}
					fieldName="Tempat Lahir"
					fieldLabel="tempat-lahir"
				/>

				<InputSelect
					bind:value={student.jenisKelamin}
					fieldLabel="jenis-kelamin"
					fieldName="Jenis Kelamin"
					options={jenisKelaminOptions}
					isRequired={true}
				/>

				<FlatpickrInput
					bind:value={student.tanggalLahir}
					fieldLabel="Tanggal lahir"
					fieldName="tanggal-lahir"
					on:ageValidation={handleAgeValidation}
				/>
			</div>

			<!-- Kolom Kanan -->
			<div class="space-y-4">
				<InputSelect
					bind:value={student.prodi}
					fieldLabel="prodi"
					fieldName="Program Studi"
					options={prodiOptions}
					isRequired={true}
				/>

				<InputFreeTextOnly
					bind:value={student.email}
					fieldName="Email"
					fieldLabel="email"
					isRequired={true}
					inputType="email"
					placeholder="Contoh: iss22027@student.del.ac.id"
				/>

				<Inputnumberonly
					bind:value={student.noHp}
					fieldName="No. HP"
					fieldLabel="no-hp"
					isRequired={true}
				/>

				<Inputnumberonly
					bind:value={student.angkatan}
					fieldName="Angkatan"
					fieldLabel="angkatan"
					isRequired={true}
					placeholder="Contoh: 2022"
				/>
			</div>
		</div>

		<button
			type="submit"
			class="w-full rounded bg-blue-500 px-4 py-2 text-white transition hover:bg-blue-600"
		>
			Simpan
		</button>
	</form>
</div>
