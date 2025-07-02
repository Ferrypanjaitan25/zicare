<script>
  import { page } from '$app/stores';
</script>

<aside class="w-64 bg-gray-800 text-white h-screen p-4 fixed top-0 left-0 flex flex-col gap-4">
  <h2 class="text-xl font-bold mb-4">Dashboard</h2>
  <nav class="flex flex-col gap-2">
      <a
      href="/"
      class="flex items-center gap-2 px-4 py-2 rounded-lg transition-colors {$page.url.pathname === '/' ? 'bg-blue-600' : 'hover:bg-gray-700'}"
    >
      📋  Data Mahasiswa
    </a>
    <a
      href="/tambah"
      class="flex items-center gap-2 px-4 py-2 rounded-lg transition-colors {$page.url.pathname === '/tambah' ? 'bg-blue-600' : 'hover:bg-gray-700'}"
    >
      ➕ Tambah Mahasiswa
    </a>
  </nav>
</aside>