<script>
  import flatpickr from 'flatpickr';
  import 'flatpickr/dist/themes/material_blue.css';
  import { onMount, createEventDispatcher } from 'svelte';

  export let value = '';
  export let fieldName = 'Tanggal Lahir';
  export let fieldLabel = 'tanggalLahir';
  export let isRequired = false;

  let inputEl;
  let errorMsg = '';
  const dispatch = createEventDispatcher();

  function isValidAge(dateString) {
    if (!dateString) return false;
    const [day, month, year] = dateString.split('/');
    const birthDate = new Date(`${year}-${month}-${day}`);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age >= 19;
  }

  function validateAndDispatch() {
    const valid = isValidAge(value);
    if (value && !valid) {
      errorMsg = 'Usia minimal 19 tahun. Tidak memenuhi syarat.';
    } else {
      errorMsg = '';
    }
    dispatch('ageValidation', { valid });
    return valid;
  }

  export function validateAge() {
    return validateAndDispatch();
  }

  onMount(() => {
    flatpickr(inputEl, {
      dateFormat: 'd/m/Y',
      maxDate: 'today',
      ...(value ? { defaultDate: value } : {}),
      onChange: ([selectedDate]) => {
        if (selectedDate) {
          const day = String(selectedDate.getDate()).padStart(2, '0');
          const month = String(selectedDate.getMonth() + 1).padStart(2, '0');
          const year = selectedDate.getFullYear();
          value = `${day}/${month}/${year}`;
          validateAndDispatch();
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
    bind:value
    on:blur={validateAndDispatch}
  />
  {#if errorMsg}
    <p class="text-red-600 text-sm mt-1">{errorMsg}</p>
  {/if}
</div>
