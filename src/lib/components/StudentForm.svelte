<script>
  import Notification from './Notification.svelte';
  import InputNumberOnly from './InputNumberOnly.svelte';
  import InputTextOnly from './InputTextOnly.svelte';
  import InputSelect from './InputSelect.svelte';
  import InputFreeTextOnly from './InputFreeTextOnly.svelte';
  import InputDateOnly from './InputDateOnly.svelte';

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
  export let jenisKelaminOptions = [];
  export let onSubmit = () => {};
  export let errorMessage = '';
  export let successMessage = '';

  $: prodiOptions = prodiOptions.sort((a, b) => a.localeCompare(b));
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
    <!-- Kolom Kiri: NIM, Nama, Jenis Kelamin, Tempat Lahir, Tanggal Lahir -->
    <div class="space-y-4">
      <div>
     
    <InputFreeTextOnly
          bind:value={student.nim}
          fieldName="NIM"
          fieldLabel="nim"
          isRequired={true}
          inputType="text"
        />
      </div>

				<InputTextOnly bind:value={student.nama} fieldLabel="nama-lengkap" isRequired={true} />

				<InputTextOnly
					bind:value={student.tempatLahir}
					fieldName="Tempat Lahir"
					fieldLabel="tempat-lahir"
				/>
        
         <InputSelect
          bind:value={student.jenisKelamin}
          fieldName="Jenis Kelamin"
          fieldLabel="jenis-kelamin"
          options={jenisKelaminOptions}
          isRequired={true}
        />

        <InputDateOnly
          bind:value={student.tanggalLahir}
          fieldName="Tanggal Lahir"
          fieldLabel="tanggal-lahir"
          isRequired={true}
          minlength="10"
          maxlength="10"
        />
      </div>

      <!-- Kolom Kanan: Prodi, Email, No. HP, Angkatan -->
      <div class="space-y-4">
        <InputSelect
          bind:value={student.prodi}
          fieldName="Program Studi"
          fieldLabel="prodi"
          options={prodiOptions}
          isRequired={true}
        />

        <InputFreeTextOnly
          bind:value={student.email}
          fieldName="Email"
          fieldLabel="email"
          isRequired={true}
          inputType="email"
          placeholder="Contoh: iss22013@students.del.ac.id"
        />

        <InputNumberOnly
          bind:value={student.noHp}
          fieldName="No. HP"
          fieldLabel="no-hp"
          isRequired={true}
          minlength="11"
          maxlength="13"
        />

        <InputNumberOnly
          bind:value={student.angkatan}
          fieldName="Angkatan"
          fieldLabel="angkatan"
          isRequired={true}
          minlength="2"
          maxlength="4"
        />
      </div>
    </div>

    <button
      type="submit"
      class="w-full rounded bg-blue-600 px-4 py-2 text-white font-semibold transition hover:bg-blue-700"
    >
      Simpan
    </button>
  </form>
</div>