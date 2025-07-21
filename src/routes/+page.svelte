<script>
  import { studentsStore } from '$lib/stores/students';
  import { goto } from '$app/navigation';
  import { onMount } from 'svelte';
  import Notification from '$lib/components/Notification.svelte';

  let students = [];
  let filteredStudents = [];
  let searchNim = '';
  let selectedProdi = '';
  let selectedJenisKelamin = '';
  let successMessage = '';

  let prodiOptions = [
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
  ].sort((a, b) => a.localeCompare(b));

  let jenisKelaminOptions = ['', 'Laki-laki', 'Perempuan'];

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
      const matchJenisKelamin = selectedJenisKelamin === '' || student.jenisKelamin === selectedJenisKelamin;
      return matchNim && matchProdi && matchJenisKelamin;
    });
  }

  function handleDelete(id) {
    const confirmDelete = confirm('Yakin ingin menghapus data ini?');
    if (confirmDelete) {
      studentsStore.update(data => data.filter(mhs => mhs.id !== id));
      successMessage = 'Data mahasiswa berhasil dihapus!';
      setTimeout(() => (successMessage = ''), 2000);
    }
  }
</script>

    <h1 class="text-3xl font-bold text-gray-800">📋 Data Mahasiswa</h1>

    {#if successMessage}
      <Notification message={successMessage} type="success" />
    {/if}

    <div class="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <div class="flex flex-col gap-4 w-full md:flex-row md:w-2/3">
        <input
          type="text"
          placeholder="🔍 Cari NIM..."
          bind:value={searchNim}
          on:input={applyFilter}
          class="w-full rounded-lg border border-gray-300 px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
          aria-label="Cari berdasarkan NIM"
        />

        <select
          bind:value={selectedProdi}
          on:change={applyFilter}
          class="w-full rounded-lg border border-gray-300 px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
          aria-label="Filter berdasarkan Program Studi"
        >
          <option value="">🎓 Semua Prodi</option>
          {#each prodiOptions.slice(1) as option}
            <option value={option}>{option}</option>
          {/each}
        </select>

        <select
          bind:value={selectedJenisKelamin}
          on:change={applyFilter}
          class="w-full rounded-lg border border-gray-300 px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
          aria-label="Filter berdasarkan Jenis Kelamin"
        >
          <option value="">👤 Semua Jenis Kelamin</option>
          {#each jenisKelaminOptions.slice(1) as option}
            <option value={option}>{option}</option>
          {/each}
        </select>
      </div>

      <button
        on:click={() => goto('/tambah')}
        class="mt-2 rounded-lg bg-blue-600 px-5 py-2 font-medium text-white transition hover:bg-blue-700 md:mt-0"
        aria-label="Tambah mahasiswa baru"
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
              <th class="px-4 py-3 text-left">Jenis Kelamin</th>
              <th class="px-4 py-3 text-left">Angkatan</th>
              <th class="px-4 py-3 text-left">Prodi</th>
              <th class="px-4 py-3 text-left">Email</th>
              <th class="px-4 py-3 text-left">No. HP</th>
              <th class="px-4 py-3 text-center min-w-[150px]">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {#each filteredStudents as student}
              <tr class="border-t transition hover:bg-gray-50">
                <td class="px-4 py-2">{student.nim}</td>
                <td class="px-4 py-2">{student.nama}</td>
                <td class="px-4 py-2">{student.tempatLahir}</td>
                <td class="px-4 py-2">{student.tanggalLahir || 'Tidak diketahui'}</td>
                <td class="px-4 py-2">{student.jenisKelamin}</td>
                <td class="px-4 py-2">{student.angkatan}</td>
                <td class="px-4 py-2">{student.prodi}</td>
                <td class="px-4 py-2">{student.email}</td>
                <td class="px-4 py-2">{student.noHp}</td>
                <td class="px-4 py-2 text-center shrink-0">
                  <div class="flex flex-row justify-center gap-2">
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
                  </div>
                </td>
              </tr>
            {/each}
          </tbody>
        </table>
      </div>
    {/if}
  </div>