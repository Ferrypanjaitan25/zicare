<script>
  import { studentsStore } from '$lib/stores/students';
  import { goto } from '$app/navigation';
  import { onMount } from 'svelte';
  import Notification from '$lib/components/Notification.svelte';

  let students = [];
  let filteredStudents = [];
  let searchNim = '';
  let selectedProdi = '';
  let successMessage = '';

  let prodiOptions = ['', 'Sistem Informasi', 'Teknologi Informasi', 'Sarjana Terapan Rekayasa Perangkat Lunak', 'Teknik Komputer', 'Teknik Elektro', 'Informatika', 'Teknik Bioproses', 'Metalurgi', 'Manajemen Rekayasa'];
  let jenisKelaminOptions = ['Laki-laki', 'Perempuan'];

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
      const matchAngkatan = selectedProdi === '' || student.angkatan === selectedProdi;
      return matchNim && matchProdi;
    });
  }

  function handleDelete(id) {
    const confirmDelete = confirm('Yakin ingin menghapus data ini?');
    if (confirmDelete) {
      studentsStore.update(data => data.filter(mhs => mhs.id !== id));
      successMessage = 'Data mahasiswa berhasil dihapus!';
      setTimeout(() => successMessage = '', 2500);
    }
  }
</script>

  <div class="ml-64 p-6 max-w-7xl mx-auto space-y-6 flex-1">
    <h1 class="text-3xl font-bold text-gray-800">📋 Data Mahasiswa</h1>

    {#if successMessage}
      <Notification message={successMessage} type="success" />
    {/if}

    <div class="flex flex-col md:flex-row gap-4 items-center justify-between">
      <div class="flex gap-4 w-full md:w-2/3">
        <input
          type="text"
          placeholder="🔍 Cari NIM..."
          bind:value={searchNim}
          on:input={applyFilter}
          class="w-full border border-gray-300 rounded-lg px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
        />

        <select
          bind:value={selectedProdi}
          on:change={applyFilter}
          class="w-full border border-gray-300 rounded-lg px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
        >
          <option value="">🎓 Semua Prodi</option>
          {#each prodiOptions.slice(1) as option}
            <option value={option}>{option}</option>
          {/each}
        </select>
      </div>

      <button
        on:click={() => goto('/tambah')}
        class="mt-2 md:mt-0 px-5 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition"
      >
        ➕ Tambah Mahasiswa
      </button>
    </div>

    {#if filteredStudents.length === 0}
      <div class="text-center text-gray-500 mt-10">🙁 Tidak ada data yang sesuai.</div>
    {:else}
      <div class="overflow-auto rounded-lg shadow">
        <table class="min-w-full bg-white text-sm text-gray-700">
          <thead class="bg-blue-100 text-left text-gray-700 uppercase text-xs">
            <tr>
              <th class="px-4 py-3">NIM</th>
              <th class="px-4 py-3">Nama</th>
              <th class="px-4 py-3">Tempat Lahir</th>
              <th class="px-4 py-3">Tanggal Lahir</th>
              <th class="px-4 py-3">Jenis Kelamin</th>
              <th class="px-4 py-3">Angkatan</th>
              <th class="px-4 py-3">Prodi</th>
              <th class="px-4 py-3">Email</th>
              <th class="px-4 py-3">No. HP</th>
              <th class="px-4 py-3 text-center">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {#each filteredStudents as student}
              <tr class="border-t hover:bg-gray-50 transition">
                <td class="px-4 py-2">{student.nim}</td>
                <td class="px-4 py-2">{student.nama}</td>
                <td class="px-4 py-2">{student.tempatLahir}</td>
                <td class="px-4 py-2">{student.tanggalLahir}</td>
                <td class="px-4 py-2">{student.jenisKelamin}</td>
                <td class="px-4 py-2">{student.angkatan}</td>
                <td class="px-4 py-2">{student.prodi}</td>
                <td class="px-4 py-2">{student.email}</td>
                <td class="px-4 py-2">{student.noHp}</td>
                <td class="px-4 py-2 text-center space-x-2">
                <button
                  on:click={() => goto(`/${student.id}`)}
                  class="rounded bg-green-500 px-2 py-1 text-sm text-white hover:bg-green-600 whitespace-nowrap"
                  aria-label="Lihat detail mahasiswa"
                >
                  📄 Detail
                </button>
                <button
                  on:click={() => handleDelete(student.id)}
                  class="rounded bg-red-500 px-2 py-1 text-sm text-white hover:bg-red-600 whitespace-nowrap"
                  aria-label="Hapus mahasiswa"
                >
                  🗑️ Hapus
                </button>
                </td>
              </tr>
            {/each}
          </tbody>
        </table>
      </div>
    {/if}
  </div>