<script>
  export let value = '';

  function handleInput(e) {
    // Hanya izinkan huruf dan spasi
    const hurufSaja = e.target.value.replace(/[^a-zA-Z\s]/g, '');
    value = hurufSaja;
  }
</script>

<div>
  <label for="nama" class="block text-sm font-medium text-gray-700">Nama Lengkap</label>
  <input
    id="nama"
    bind:value
    on:input={handleInput}
    class="w-full border p-2 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
    placeholder="Nama Lengkap"
    required
  />
</div>