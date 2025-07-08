<script>
	export let value = '';
	export let fieldName = 'NIM';
	export let fieldLabel = '';
	export let isRequired = false;
	export let inputType = 'text'; // 'text', 'email', 'alphanumeric', 'letters'

	function handleInput(e) {
		let filteredValue = e.target.value;

		// Terapkan filter berdasarkan tipe input
		switch (inputType) {
			case 'letters':
				// Hanya huruf dan spasi
				filteredValue = e.target.value.replace(/[^a-zA-Z\s]/g, '');
				break;
			case 'alphanumeric':
				// Huruf, angka, dan spasi
				filteredValue = e.target.value.replace(/[^a-zA-Z\s0-9]/g, '');
				break;
			case 'email':
				// Email: huruf, angka, @, ., -, _
				filteredValue = e.target.value.replace(/[^a-zA-Z0-9@.\-_]/g, '');
				break;
			case 'text':
			default:
				// Tidak ada filter, semua karakter diizinkan
				filteredValue = e.target.value;
				break;
		}

		value = filteredValue;
	}

	// Tentukan tipe HTML input berdasarkan inputType
	$: htmlInputType = inputType === 'email' ? 'email' : 'text';
</script>

<div>
	<label for={fieldLabel} class="block text-sm font-medium text-gray-700">{fieldName}</label>
	<input
		id={fieldLabel}
		type={htmlInputType}
		bind:value
		on:input={handleInput}
		class="w-full rounded border p-2 shadow-sm focus:ring-2 focus:ring-blue-300 focus:outline-none"
		placeholder={fieldName}
		required={isRequired}
	/>
</div>