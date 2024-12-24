<template>
  <div class="min-h-screen flex flex-col">
    <!-- Navbar selalu terlihat di semua halaman -->
    <NavBar />

    <!-- Sidebar hanya muncul di halaman admin dan operator -->
    <Sidebar 
      v-if="isSidebarVisible && (currentRoute === 'admin' || currentRoute === 'operator')" 
      class="sidebar" 
    />

    <!-- Konten utama -->
    <div :style="{ marginLeft: isSidebarVisible && (currentRoute === 'admin' || currentRoute === 'operator') ? sidebarWidth : '0' }" class="content p-2 mt-12">
      <!-- Router view untuk menampilkan halaman -->
      <router-view />
    </div>

    <!-- Footer selalu terlihat di semua halaman -->
    <FancyFooter />
  </div>
</template>

<script>
import { ref, watch } from 'vue';
import Sidebar from '@/components/SideBar/Sidebar.vue';
import NavBar from '@/components/NavBar/NavBar.vue';
import FancyFooter from '@/components/Footer/Footer.vue'; // Import FancyFooter
import { sidebarWidth } from '@/components/SideBar/state'; // Import ukuran sidebar
import { useRouter } from 'vue-router';

export default {
  components: { Sidebar, NavBar, FancyFooter },
  setup() {
    const isSidebarVisible = ref(false); // Default: Sidebar tidak terlihat
    const currentRoute = ref(''); // Menyimpan nama rute saat ini
    const router = useRouter();

    // Perbarui nama rute saat berganti halaman
    watch(
      () => router.currentRoute.value.name, // Mengawasi perubahan rute
      (newRoute) => {
        currentRoute.value = newRoute;

        // Tampilkan sidebar hanya di halaman admin dan operator
        if (newRoute === 'admin' || newRoute === 'operator') {
          isSidebarVisible.value = true;
        } else {
          isSidebarVisible.value = false;
        }
      },
      { immediate: true }
    );

    return { sidebarWidth, isSidebarVisible, currentRoute };
  },
};
</script>

<style>

body {
  margin: 0;
  min-height: 100vh;
}
</style>
