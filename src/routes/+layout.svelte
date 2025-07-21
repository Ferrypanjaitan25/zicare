<script lang="ts">
	import '../app.css';
	import Sidebar from '$lib/components/Sidebar.svelte';

	let { children } = $props();
</script>

<div class="flex min-h-screen">
	<Sidebar />	

{@render children()}

</div>