<script>
<<<<<<< Updated upstream
  import Notification from './Notification.svelte';
  import InputTextOnly from './InputTextOnly.svelte';
  import InputNumberOnly from './InputNumberOnly.svelte';
  import InputDateOnly from './InputDateOnly.svelte';

  export let student = {
    nim: '',
    nama: '',
    tempatLahir: '',
    tanggalLahir: '',
    prodi: '',
    email: '',
    noHp: '',
    angkatan: ''
  };
  export let prodiOptions = [];
  export let onSubmit = () => {};
  export let errorMessage = '';
  export let successMessage = '';
=======
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
  prodiOptions = prodiOptions.sort((a, b) => a.localeCompare(b));
  export let jenisKelaminOptions = [];
  export let onSubmit = () => {};
  export let errorMessage = '';
  export let successMessage = '';
    


>>>>>>> Stashed changes
</script>

<div class="mx-auto max-w-2xl rounded-lg border border-gray-200 bg-white p-6 shadow-md">
  {#if errorMessage}
    <Notification message={errorMessage} type="error" />
  {/if}

  {#if successMessage}
    <Notification message={successMessage} type="success" />
  {/if}

<<<<<<< Updated upstream
  <form on:submit|preventDefault={onSubmit} class="space-y-4">
    <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
      <!-- Kolom Kiri: NIM, Nama, Tempat Lahir, Tanggal Lahir -->
      <div class="space-y-4">
        <div>
          <label for="nim" class="block text-sm font-medium text-gray-700">NIM</label>
          <input
            id="nim"
            bind:value={student.nim}
            class="w-full rounded border p-2 shadow-sm focus:ring-2 focus:ring-blue-300 focus:outline-none"
            placeholder="NIM"
            minlength="8"
            maxlength="10"
            required
          />
        </div>
=======
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
>>>>>>> Stashed changes

				<InputTextOnly bind:value={student.nama} fieldLabel="nama-lengkap" isRequired={true} />

				<InputTextOnly
					bind:value={student.tempatLahir}
					fieldName="Tempat Lahir"
					fieldLabel="tempat-lahir"
				/>
<<<<<<< Updated upstream
      
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
        <div>
          <label for="prodi" class="block text-sm font-medium text-gray-700">Program Studi</label>
          <select
            id="prodi"
            bind:value={student.prodi}
            class="w-full rounded border p-2 shadow-sm focus:ring-2 focus:ring-blue-300 focus:outline-none"
            required
          >
            <option value="">Pilih Program Studi</option>
            {#each prodiOptions as option}
              <option value={option}>{option}</option>
            {/each}
          </select>
        </div>

        <div>
          <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
          <input
            id="email"
            bind:value={student.email}
            type="email"
            class="w-full rounded border p-2 shadow-sm focus:ring-2 focus:ring-blue-300 focus:outline-none"
            placeholder="Email"
            required
          />
        </div>

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
      class="w-full rounded bg-blue-500 px-4 py-2 text-white transition hover:bg-blue-600"
    >
      Simpan
    </button>
  </form>
</div>
=======
        
         <InputSelect
          bind:value={student.jenisKelamin}
          fieldName="Jenis Kelamin"
          fieldLabel="options"
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

   
				<div>
		
				</div>
			</div>

		 <!-- Kolom Kanan: Prodi, Email, No. Hp, Angkatan, -->
      <div class="space-y-4">
        
         <InputSelect
          bind:value={student.prodi}
          fieldName="Program Studi"
          fieldLabel="prodi"
          options={prodiOptions}
          isRequired={true}
        />

        <div>
         <InputFreeTextOnly
          bind:value={student.email}
          fieldName="Email"
          fieldLabel="email"
          isRequired={true}
          inputType="email"
          placeholder="Contoh: iss22013@students.del.ac.id"
        />
          
        </div>
				
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
			class="w-full rounded bg-blue-500 px-4 py-2 text-white transition hover:bg-blue-600"
		>
			Simpan
		</button>
	</form>
</div>
>>>>>>> Stashed changes
