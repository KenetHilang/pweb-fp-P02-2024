<script>
import Sidebar from '@/components/SideBar/Sidebar.vue';
import NavBar from '@/components/NavBar/NavBar.vue';
import { ref } from 'vue';

export default {
  components: { Sidebar, NavBar },
  setup() {
    const isSidebarVisible = ref(true);
    const sidebarWidth = ref('250px'); // Tambahkan definisi sidebarWidth

    const toggleSidebar = () => {
      isSidebarVisible.value = !isSidebarVisible.value;
    };

    return { sidebarWidth, isSidebarVisible, toggleSidebar };
  },
};
</script>

<template>
  <div class="min-h-screen w-full bg-gray-50">
    <NavBar :toggleSidebar="toggleSidebar" />

    <div class="flex min-h-[calc(100vh-48px)] mt-12">
      <Sidebar
        v-show="isSidebarVisible"
        class="fixed h-[calc(100vh-48px)] bg-white shadow-md z-10"
      />

      <div
        :style="{ marginLeft: isSidebarVisible ? sidebarWidth : '0' }"
        class="flex-1 p-4 transition-all duration-300 ease-in-out"
      >
        <router-view />
      </div>
    </div>
  </div>
</template>

<style>
/* Hanya menyimpan scrollbar hiding jika diperlukan */
::-webkit-scrollbar {
  display: none;
}

@media (max-width: 425px) {
  .sidebar {
    display: none !important;
  }
}
</style>

