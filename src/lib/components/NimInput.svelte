<script>
  export let value = '';
</script>

<input
  bind:value
  class="w-full border p-2 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
  placeholder="NIM"
  minlength="8"
  maxlength="10"
  required
/>