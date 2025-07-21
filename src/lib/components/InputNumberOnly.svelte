<script>
	export let value = '';
	export let fieldName = 'Nomor Telepon';
	export let fieldLabel = '';
	export let isRequired = false;
  export let placeholder = '';

	function handleInput(e) {
		// Hanya izinkan angka (0-9)
		const angkaSaja = e.target.value.replace(/[^0-9]/g, '');
		value = angkaSaja;
	}
</script>

<div>
	<label for={fieldLabel} class="block text-sm font-medium text-gray-700">{fieldName}</label>
	<input
		id={fieldLabel}
		bind:value
		on:input={handleInput}
		class="w-full rounded border p-2 shadow-sm focus:ring-2 focus:ring-blue-300 focus:outline-none"
        minlength="2"
        maxlength="13"
		placeholder={placeholder || fieldName}
		required={isRequired}
	/>
</div>