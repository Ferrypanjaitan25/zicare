<script>
  export let value = ''; // Nilai dalam format DD-MM-YYYY
  export let fieldName = 'Tanggal Lahir';
  export let fieldLabel = 'tanggal-lahir';
  export let isRequired = true;
  export let minlength = undefined;
  export let maxlength = undefined;

  let internalDate = ''; // Nilai internal untuk date picker (YYYY-MM-DD)
  let datePicker;

  // Konversi DD-MM-YYYY ke YYYY-MM-DD untuk date picker
  $: if (value && /^\d{2}-\d{2}-\d{4}$/.test(value)) {
    const [day, month, year] = value.split('-');
    internalDate = `${year}-${month}-${day}`;
  } else {
    internalDate = '';
  }

  // Konversi YYYY-MM-DD dari date picker ke DD-MM-YYYY
  function handleDateChange(e) {
    const dateValue = e.target.value; // YYYY-MM-DD
    if (dateValue) {
      const [year, month, day] = dateValue.split('-');
      value = `${day}-${month}-${year}`; // DD-MM-YYYY
    } else {
      value = '';
    }
  }

  // Buka date picker saat input diklik
  function openDatePicker() {
    if (datePicker) {
      datePicker.focus();
      datePicker.showPicker();
    }
  }

  // Format input manual (seperti kode asli)
  function handleInput(e) {
    let input = e.target.value.replace(/[^0-9-]/g, ''); // Hanya izinkan angka dan tanda penghubung
    const parts = input.split('-');

    if (parts.length === 1 && input.length > 2 && input.length <= 4) {
      input = `${input.slice(0, 2)}-${input.slice(2)}`;
    } else if (parts.length === 2 && input.length > 5) {
      input = `${parts[0].slice(0, 2)}-${parts[1].slice(0, 2)}-${parts[1].slice(2)}`;
    }

    if (input.length > 10) {
      input = input.slice(0, 10);
    }

    value = input;
  }
</script>

<div>
  <label for={fieldLabel} class="block text-sm font-medium text-gray-700">{fieldName}</label>
  <div class="relative">
    <input
      bind:value
      id={fieldLabel}
      type="text"
      on:input={handleInput}
      on:click={openDatePicker}
      class="w-full rounded-lg border p-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
      placeholder="DD-MM-YYYY"
      required={isRequired}
      {minlength}
      {maxlength}
      inputmode="numeric"
      aria-label={fieldName}
    />
    <input
      bind:this={datePicker}
      type="date"
      bind:value={internalDate}
      on:change={handleDateChange}
      class="absolute inset-0 opacity-0 pointer-events-none"
      aria-hidden="true"
    />
  </div>
</div>

<style>
  /* Pastikan date picker tidak terlihat tetapi tetap dapat memicu kalender */
  input[type="date"] {
    width: 0;
    height: 0;
  }
</style>