<script>
  export let value = '';
  export let fieldLabel = 'Tanggal Lahir';
  export let fieldName = 'tanggalLahir';
  export let isRequired = false;

  function handleInput(e) {
    value = e.target.value;
  }
</script>

<div>
  <label for={fieldName} class="block text-sm font-medium text-gray-700 mb-1">
    {fieldLabel}
  </label>
  <input
    type="date"
    id={fieldName}
    name={fieldName}
    bind:value
    on:input={handleInput}
    required={isRequired}
    class="w-full rounded border p-2 shadow-sm focus:ring-2 focus:ring-blue-300 focus:outline-none"
  />
</div>
