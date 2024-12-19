<script>
import Sidebar from '@/components/SideBar/Sidebar.vue';
import { sidebarWidth } from '@/components/SideBar/state';
import NavBar from '@/components/NavBar/NavBar.vue';
import { ref } from 'vue';

export default {
  components: { Sidebar, NavBar },
  setup() {
    const isSidebarVisible = ref(true); // Reactive state to control sidebar visibility

    const toggleSidebar = () => {
      isSidebarVisible.value = !isSidebarVisible.value; // Toggle visibility state
    };

    return { sidebarWidth, isSidebarVisible, toggleSidebar };
  },
};
</script>

<template>
  <div>
    <!-- Navigation Bar -->
    <NavBar :toggleSidebar="toggleSidebar" />

    <!-- Sidebar -->
    <Sidebar
      v-show="isSidebarVisible"
      class="sidebar"
    />

    <!-- Main Content -->
    <div
      :style="{ marginLeft: isSidebarVisible ? sidebarWidth : '0' }"
      class="content p-2 mt-12"
    >
      <router-view />
    </div>
  </div>
</template>



<style>
/* Hide Sidebar on Mobile */
@media (max-width: 425px) {
  .sidebar {
    display: none !important; /* Ensure it's completely hidden */
  }

  .content {
    margin-left: 0 !important; /* Adjust content margin */
  }
}

/* Default View */
.view {
  margin-top: 3.5rem;
}

::-webkit-scrollbar {
  display: none;
}
</style>

