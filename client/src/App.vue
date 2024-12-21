<script>
import Sidebar from '@/components/SideBar/Sidebar.vue';
import NavBar from '@/components/NavBar/NavBar.vue';
import { sidebarWidth } from '@/components/SideBar/state';
import { useRoute } from 'vue-router'; // Import useRoute untuk akses rute saat ini

export default {
  components: { Sidebar, NavBar },
  setup() {
    const route = useRoute(); // Dapatkan informasi rute aktif
    return { route, sidebarWidth };
  },
};
</script>

<template>
  <div>
    <!-- Tampilkan Sidebar dan NavBar hanya jika rute membutuhkan layout -->
    <div v-if="route.meta.requiresLayout">
      <NavBar />
      <Sidebar />
    </div>

    <!-- Router View untuk konten halaman -->
    <div :style="{ 'margin-left': route.meta.requiresLayout ? sidebarWidth : '0' }" class="p-2 mt-12">
      <router-view />
    </div>
  </div>
</template>

<style>
.view {
  margin-top: 3.5rem;
}

::-webkit-scrollbar {
  display: none;
}
</style>
