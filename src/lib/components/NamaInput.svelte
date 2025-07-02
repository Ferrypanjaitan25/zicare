<script>
  export let value = '';

  function handleInput(e) {
    // Hanya izinkan huruf (a-z, A-Z) dan spasi
    const hurufSaja = e.target.value.replace(/[^a-zA-Z\s]/g, '');
    value = hurufSaja;
  }
</script>

<input
  bind:value
  on:input={handleInput}
  class="w-full border p-2 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
  placeholder="Nama Lengkap"
  required
/>