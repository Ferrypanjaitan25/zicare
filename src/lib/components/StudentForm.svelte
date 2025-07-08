<script>
	import Notification from './Notification.svelte';
	import Inputnumberonly from './InputNumberOnly.svelte';
	import InputTextOnly from './InputTextOnly.svelte';
	import InputSelect from './InputSelect.svelte'; 
  import InputFreeTextOnly from './InputFreeTextOnly.svelte';
  import DateInput from './DateInput.svelte';

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
            inputType="nim"
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
          fieldLabel="jenis-kelamin"
          fieldName="Jenis Kelamin"
          options={jenisKelaminOptions}
          isRequired={true}
        />  

        <DateInput
         bind:value={student.tanggalLahir} 
         fieldLabel="tanggal-lahir" 
         fieldName="Tanggal Lahir"
         isRequired={true}
       />

				<div>
		
				</div>
			</div>

		 <!-- Kolom Kanan: Prodi, Email, No. Hp, Angkatan, -->
      <div class="space-y-4">
        
        <InputSelect
          bind:value={student.prodi}
          fieldLabel="prodi"
          fieldName="Program Studi"
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
          />
          
        </div>
				
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
