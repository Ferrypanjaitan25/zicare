<script>
  export let value = '';
  export let options = [];
</script>

<select
  bind:value
  class="w-full border p-2 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
  required
>
  <option value="">Pilih Program Studi</option>
  {#each options as option}
    <option value={option}>{option}</option>
  {/each}
</select>