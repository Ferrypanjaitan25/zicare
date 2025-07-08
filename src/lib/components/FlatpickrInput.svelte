<script>
  import flatpickr from 'flatpickr';
  import 'flatpickr/dist/themes/material_blue.css'; // Import the flatpickr theme
  import { onMount } from 'svelte';

  export let value = '';
  export let fieldName = 'Tanggal Lahir';
  export let fieldLabel = 'tanggalLahir';
  export let isRequired = false;

  let inputEl;

  onMount(() => {
    flatpickr(inputEl, {
      dateFormat: 'd/m/Y',         // Output: DD/MM/YYYY
      maxDate: 'today',
      ...(value ? { defaultDate: value } : {}),
      onChange: ([selectedDate]) => {
        if (selectedDate) {
          const day = String(selectedDate.getDate()).padStart(2, '0');
          const month = String(selectedDate.getMonth() + 1).padStart(2, '0');
          const year = selectedDate.getFullYear();
          value = `${day}/${month}/${year}`;
        }
      }
    });
  });
</script>

<div>
  <label for={fieldLabel} class="block text-sm font-medium text-gray-700 mb-1">
    {fieldName}
  </label>
  <input
    bind:this={inputEl}
    id={fieldLabel}
    name={fieldLabel}
    type="text"
    placeholder="Pilih tanggal"
    class="w-full rounded border p-2 shadow-sm focus:ring-2 focus:ring-blue-300 focus:outline-none"
    required={isRequired}
  />
</div>