<script>
	export let value = '';
	export let fieldName = 'Nama Lengkap';
	export let fieldLabel = '';
	export let isRequired = false;

	function handleInput(e) {
		// Hanya izinkan huruf dan spasi
		const hurufSaja = e.target.value.replace(/[^a-zA-Z\s]/g, '');
		value = hurufSaja;
	}
</script>

<div>
	<label for={fieldLabel} class="block text-sm font-medium text-gray-700">{fieldName}</label>
	<input
		id={fieldLabel}
		bind:value
		on:input={handleInput}
		class="w-full rounded border p-2 shadow-sm focus:ring-2 focus:ring-blue-300 focus:outline-none"
		placeholder={fieldName}
		required={isRequired}
	/>
</div>
