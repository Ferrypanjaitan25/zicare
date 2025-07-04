<script>
  export let value = '';

  function handleInput(e) {
    // Hanya izinkan angka
    const angka = e.target.value.replace(/\D/g, '');
    value = angka;
  }
</script>

<div>
  <label for="noHp" class="block text-sm font-medium text-gray-700">No. HP</label>
  <input
    id="noHp"
    type="text"
    bind:value
    on:input={handleInput}
    class="w-full border p-2 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
    placeholder="No HP"
    required
    minlength="11"
    maxlength="13"
    inputmode="numeric"
    pattern="\d*"
  />
</div>