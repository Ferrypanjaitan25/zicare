<script>
  export let value = '';
  export let fieldName = 'Tanggal Lahir';
  export let fieldLabel = 'tanggal-lahir';
  export let isRequired = true;
  export let minlength = undefined;
  export let maxlength = undefined;

  function handleInput(e) {
    let input = e.target.value.replace(/[^0-9-]/g, ''); // Hanya izinkan angka dan tanda penghubung
    const parts = input.split('-');

    // Format DD-MM-YYYY
    if (parts.length === 1 && input.length > 2 && input.length <= 4) {
      input = `${input.slice(0, 2)}-${input.slice(2)}`;
    } else if (parts.length === 2 && input.length > 5) {
<<<<<<< Updated upstream
      input = `${parts[0].slice(0, 2)}-${parts[1].slice(0, 2)}-${parts[1].slice(2)}`;
=======
      input = `${parts[0].slice(0,2)}-${parts[1].slice(0,2)}-${parts[1].slice(2)}`;
>>>>>>> Stashed changes
    }

    // Batasi panjang total 10 karakter (DD-MM-YYYY)
    if (input.length > 10) {
      input = input.slice(0, 10);
    }

    value = input;
  }
</script>

<div>
  <label for={fieldLabel} class="block text-sm font-medium text-gray-700">{fieldName}</label>
  <input
    id={fieldLabel}
    type="text"
    bind:value
    on:input={handleInput}
<<<<<<< Updated upstream
    class="w-full rounded border p-2 shadow-sm focus:ring-2 focus:ring-blue-300 focus:outline-none"
=======
    class="w-full rounded-lg border p-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
>>>>>>> Stashed changes
    placeholder="DD-MM-YYYY"
    required={isRequired}
    {minlength}
    {maxlength}
    inputmode="numeric"
  />
<<<<<<< Updated upstream
</div>
=======
</div>

>>>>>>> Stashed changes
