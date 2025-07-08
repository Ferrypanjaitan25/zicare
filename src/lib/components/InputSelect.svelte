<script>
  export let value = '';
  export let options = [];
  export let fieldLabel = '';
  export let fieldName = 'Pilih Opsi';
  export let isRequired = false;

  function handleChange(e) {
    value = e.target.value;
  }
</script>

<div>
  <label for={fieldLabel} class="block text-sm font-medium text-gray-700">{fieldName}</label>
  <select
    id={fieldLabel}
    bind:value
    on:change={handleChange}
    class="w-full rounded border p-2 shadow-sm focus:ring-2 focus:ring-blue-300 focus:outline-none"
    required={isRequired}
  >
    <option value="">{fieldName}</option>
    {#each options as option}
      <option value={option}>{option}</option>
    {/each}
  </select>
</div>
