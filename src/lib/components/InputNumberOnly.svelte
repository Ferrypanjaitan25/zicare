<script>
  export let value = '';
  export let fieldName = 'No. HP';
  export let fieldLabel = 'no-hp';
  export let isRequired = true;

  function handleInput(e) {
    // Hanya izinkan angka
    const angka = e.target.value.replace(/\D/g, '');
    value = angka;
  }
</script>

<div>
  <label for={fieldLabel} class="block text-sm font-medium text-gray-700">{fieldName}</label>
  <input
    id={fieldLabel}
    type="text"
    bind:value
    on:input={handleInput}
    class="w-full rounded border p-2 shadow-sm focus:ring-2 focus:ring-blue-300 focus:outline-none"
    placeholder={fieldName}
    required={isRequired}
    minlength="11"
    maxlength="13"
    inputmode="numeric"
    pattern="\d*"
  />
</div>