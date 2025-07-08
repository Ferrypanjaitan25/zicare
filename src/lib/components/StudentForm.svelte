<script>
	import Notification from './Notification.svelte';
	import Inputnumberonly from './InputNumberOnly.svelte';
	import InputTextOnly from './InputTextOnly.svelte';

	export let student = {
		nim: '',
		nama: '',
		tempatLahir: '',
		prodi: '',
		email: '',
		noHp: ''
	};
	export let prodiOptions = [];
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
      <!-- Kolom Kiri: NIM, Nama, Tempat Lahir -->
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

				<InputTextOnly bind:value={student.nama} fieldLabel="nama-lengkap" isRequired={true} />

				<InputTextOnly
					bind:value={student.tempatLahir}
					fieldName="Tempat Lahir"
					fieldLabel="tempat-lahir"
				/>

				<div>
		
				</div>
			</div>

		 <!-- Kolom Kanan: Prodi, Email, No. HP -->
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
            class="w-full rounded border p-2 shadow-sm focus:ring-2 focus:ring-blue-300 focus:outline-none"
            placeholder="Email"
            required
          />
        </div>
				<Inputnumberonly bind:value={student.noHp}
          fieldName="No. HP"
          fieldLabel="no-hp"
          isRequired={true} 
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
