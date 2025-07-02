<script>
  export let value = '';
  
  function handleInput(e) {
    const angka = e.target.value.replace(/\D/g, '');
    value = angka;
  }
</script>

<input
  type="text"
  bind:value
  class="w-full border p-2 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
  placeholder="No HP"
  required
  minlength="11"
  maxlength="13"
  inputmode="numeric"
  pattern="\d*"
  on:input={handleInput}
/>