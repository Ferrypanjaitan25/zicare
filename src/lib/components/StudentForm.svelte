<script>
  import Notification from './Notification.svelte';

  export let student = { nim: '', nama: '', prodi: '', email: '', noHp: '' };
  export let prodiOptions = [];
  export let onSubmit = () => {};
  export let errorMessage = '';
  export let successMessage = '';

  function handleInputNama(e) {
    // Hanya izinkan huruf dan spasi
    const hurufSaja = e.target.value.replace(/[^a-zA-Z\s]/g, '');
    student.nama = hurufSaja;
  }

  function handleInputNoHp(e) {
    // Hanya izinkan angka
    const angka = e.target.value.replace(/\D/g, '');
    student.noHp = angka;
  }
</script>

<div class="space-y-4">
  {#if errorMessage}
    <Notification message={errorMessage} type="error" />
  {/if}

  {#if successMessage}
    <Notification message={successMessage} type="success" />
  {/if}

  <form on:submit|preventDefault={onSubmit} class="space-y-4">
    <!--nim.svelte-->
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

    <!--Nama.svelte-->
    <div>
      <label for="nama" class="block text-sm font-medium text-gray-700">Nama Lengkap</label>
      <input
        id="nama"
        bind:value={student.nama}
        on:input={handleInputNama}
        class="w-full border p-2 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
        placeholder="Nama Lengkap"
        required
      />
    </div>

    <!--Prodi.svelte-->
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

    <!--Email.svelte-->
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

    <!--noHp.svelte-->
    <div>
      <label for="noHp" class="block text-sm font-medium text-gray-700">No. HP</label>
      <input
        id="noHp"
        type="text"
        bind:value={student.noHp}
        on:input={handleInputNoHp}
        class="w-full border p-2 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
        placeholder="No HP"
        required
        minlength="11"
        maxlength="13"
        inputmode="numeric"
        pattern="\d*"
      />
    </div>

    <button
      type="submit"
      class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
    >
      Simpan
    </button>
  </form>
</div>