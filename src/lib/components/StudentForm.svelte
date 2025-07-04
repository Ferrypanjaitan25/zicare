<script>
  import Notification from './Notification.svelte';
  import NamaInput from './NamaInput.svelte';
  import NoHpInput from './NoHpInput.svelte';

  export let student = { nim: '', nama: '', prodi: '', email: '', noHp: '' };
  export let prodiOptions = [];
  export let onSubmit = () => {};
  export let errorMessage = '';
  export let successMessage = '';
</script>

<div class="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md border border-gray-200">
  {#if errorMessage}
    <Notification message={errorMessage} type="error" />
  {/if}

  {#if successMessage}
    <Notification message={successMessage} type="success" />
  {/if}

  <form on:submit|preventDefault={onSubmit} class="space-y-4">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <!-- Kolom Kiri: NIM, Nama, Prodi -->
      <div class="space-y-4">
        <div>
          <label for="nim" class="block text-sm font-medium text-gray-700">NIM</label>
          <input
            id="nim"
            bind:value={student.nim}
            class="w-full border p-2 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
            placeholder="NIM"
            minlength="8"
            maxlength="10"
            required
          />
        </div>

        <NamaInput bind:value={student.nama} />

        <div>
          <label for="prodi" class="block text-sm font-medium text-gray-700">Program Studi</label>
          <select
            id="prodi"
            bind:value={student.prodi}
            class="w-full border p-2 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
            required
          >
            <option value="">Pilih Program Studi</option>
            {#each prodiOptions as option}
              <option value={option}>{option}</option>
            {/each}
          </select>
        </div>
      </div>

      <!-- Kolom Kanan: Email, No. HP -->
      <div class="space-y-4">
        <div>
          <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
          <input
            id="email"
            bind:value={student.email}
            class="w-full border p-2 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
            placeholder="Email"
            required
          />
        </div>

        <NoHpInput bind:value={student.noHp} />
      </div>
    </div>

    <button
      type="submit"
      class="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
    >
      Simpan
    </button>
  </form>
</div>