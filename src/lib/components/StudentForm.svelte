<script>
  import Notification from './Notification.svelte';
  import NimInput from './NimInput.svelte';
  import NamaInput from './NamaInput.svelte';
  import ProdiSelect from './ProdiSelect.svelte';
  import EmailInput from './EmailInput.svelte';
  import NoHpInput from './NoHpInput.svelte';

  export let student = { nim: '', nama: '', prodi: '', email: '', noHp: '' };
  export let prodiOptions = [];
  export let onSubmit = () => {};
  export let errorMessage = '';
  export let successMessage = '';
</script>

<div class="space-y-4">
  {#if errorMessage}
    <Notification message={errorMessage} type="error" />
  {/if}

  {#if successMessage}
    <Notification message={successMessage} type="success" />
  {/if}

  <form on:submit|preventDefault={onSubmit} class="space-y-4">
    <NimInput bind:value={student.nim} />
    <NamaInput bind:value={student.nama} />
    <ProdiSelect bind:value={student.prodi} options={prodiOptions} />
    <EmailInput bind:value={student.email} />
    <NoHpInput bind:value={student.noHp} />

    <button
      type="submit"
      class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
    >
      Simpan
    </button>
  </form>
</div>