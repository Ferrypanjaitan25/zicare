<script>
  import { studentsStore } from '$lib/stores/students';
  import { goto } from '$app/navigation';
  import { onMount } from 'svelte';
  import Notification from '$lib/components/Notification.svelte';
  import Sidebar from '$lib/components/Sidebar.svelte';

  let students = [];
  let filteredStudents = [];
  let searchNim = '';
  let selectedProdi = '';
  let successMessage = '';

  const prodiOptions = [
    '',
    'Sistem Informasi',
    'Teknologi Informasi',
    'Sarjana Terapan Rekayasa Perangkat Lunak',
    'Teknik Komputer',
    'Teknik Elektro',
    'Informatika',
    'Teknik Bioproses',
    'Metalurgi',
    'Manajemen Rekayasa'
  ];

  onMount(() => {
    studentsStore.subscribe(data => {
      students = data;
      applyFilter();
    });
  });

  function applyFilter() {
    filteredStudents = students.filter(student => {
      const matchNim = searchNim === '' || student.nim.includes(searchNim);
      const matchProdi = selectedProdi === '' || student.prodi === selectedProdi;
      return matchNim && matchProdi;
    });
  }

  function handleDelete(id) {
    const confirmDelete = confirm('Yakin ingin menghapus data ini?');
    if (confirmDelete) {
      studentsStore.update(data => data.filter(mhs => mhs.id !== id));
      successMessage = 'Data mahasiswa berhasil dihapus!';
      setTimeout(() => (successMessage = ''), 2500);
    }
  }
</script>

<div class="flex min-h-screen bg-gray-100">
  <Sidebar />
  <div class="flex-1 p-6 max-w-7xl mx-auto space-y-6">
    <h1 class="text-3xl font-bold text-gray-800">📋 Data Mahasiswa</h1>

    {#if successMessage}
      <Notification message={successMessage} type="success" />
    {/if}

    <div class="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <div class="flex w-full gap-4 md:w-2/3">
        <input
          type="text"
          placeholder="🔍 Cari NIM..."
          bind:value={searchNim}
          on:input={applyFilter}
          class="w-full rounded-lg border border-gray-300 px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
        />

        <select
          bind:value={selectedProdi}
          on:change={applyFilter}
          class="w-full rounded-lg border border-gray-300 px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
        >
          <option value="">🎓 Semua Prodi</option>
          {#each prodiOptions.slice(1) as option}
            <option value={option}>{option}</option>
          {/each}
        </select>
      </div>

      <button
        on:click={() => goto('/tambah')}
        class="mt-2 rounded-lg bg-blue-600 px-5 py-2 font-medium text-white transition hover:bg-blue-700 md:mt-0"
      >
        ➕ Tambah Mahasiswa
      </button>
    </div>

    {#if filteredStudents.length === 0}
      <div class="mt-10 text-center text-gray-500">🙁 Tidak ada data yang sesuai.</div>
    {:else}
      <div class="overflow-auto rounded-lg shadow">
        <table class="min-w-full bg-white text-sm text-gray-700">
          <thead class="bg-blue-100 text-xs uppercase text-gray-700">
            <tr>
              <th class="px-4 py-3 text-left">NIM</th>
              <th class="px-4 py-3 text-left">Nama</th>
              <th class="px-4 py-3 text-left">Tempat Lahir</th>
              <th class="px-4 py-3 text-left">Tanggal Lahir</th>
              <th class="px-4 py-3 text-left">Prodi</th>
              <th class="px-4 py-3 text-left">Email</th>
              <th class="px-4 py-3 text-left">No. HP</th>
              <th class="px-4 py-3 text-left">Angkatan</th>
              <th class="px-4 py-3 text-center">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {#each filteredStudents as student}
              <tr class="border-t transition hover:bg-gray-50">
                <td class="px-4 py-2">{student.nim}</td>
                <td class="px-4 py-2">{student.nama}</td>
                <td class="px-4 py-2">{student.tempatLahir}</td>
                <td class="px-4 py-2">{student.tanggalLahir || 'Tidak diketahui'}</td>
                <td class="px-4 py-2">{student.prodi}</td>
                <td class="px-4 py-2">{student.email}</td>
                <td class="px-4 py-2">{student.noHp}</td>
                <td class="px-4 py-2">{student.angkatan}</td>
                <td class="px-4 py-2 text-center space-x-2">
                  <button
                    on:click={() => goto(`/${student.id}`)}
                    class="rounded bg-green-500 px-3 py-1 text-xs text-white hover:bg-green-600"
                  >
                    Detail
                  </button>
                  <button
                    on:click={() => handleDelete(student.id)}
                    class="rounded bg-red-500 px-3 py-1 text-xs text-white hover:bg-red-600"
                  >
                    Hapus
                  </button>
                </td>
              </tr>
            {/each}
          </tbody>
        </table>
      </div>
    {/if}
  </div>
</div>