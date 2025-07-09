<script>
  export let value = '';
  export let fieldName = 'Number Input';
  export let fieldLabel = 'number-input';
  export let isRequired = true;
  export let minlength = undefined;
  export let maxlength = undefined;

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
    inputmode="numeric"
    pattern="\d*"
    {minlength}
    {maxlength}
  />
</div>