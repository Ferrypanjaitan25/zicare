<script>
	export let value = '';
	export let fieldName = 'NIM';
	export let fieldLabel = '';
	export let isRequired = false;
	export let inputType = 'text'; 
	 export let placeholder = '';

	function handleInput(e) {
		let filteredValue = e.target.value;

		switch (inputType) {
			case 'nim':
				filteredValue = e.target.value.replace(/[^a-zA-Z\s0-9]/g, '');
	
				if (filteredValue.length > 12) {
					filteredValue = filteredValue.slice(0, 12);
				}
				break;
			case 'email':
				filteredValue = e.target.value.replace(/[^a-zA-Z0-9@.\-_]/g, '');
				break;
			case 'text':
			default:
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
		placeholder={placeholder || fieldName}
		required={isRequired}
	/>
</div>