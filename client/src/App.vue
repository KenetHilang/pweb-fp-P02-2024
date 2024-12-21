<script>
import { ref } from 'vue';
import Sidebar from '@/components/SideBar/Sidebar.vue';
import NavBar from '@/components/NavBar/NavBar.vue';
import { sidebarWidth } from '@/components/SideBar/state'; // Ensure you import sidebarWidth
import LoginPage from './views/LoginPage.vue';

export default {
  components: { Sidebar, NavBar, LoginPage },
  setup() {
    const isSidebarVisible = ref(true);
    const isLoggedIn = ref(false); // Track login status

    const toggleSidebar = () => {
      isSidebarVisible.value = !isSidebarVisible.value;
    };

    // Method to update login status
    const updateLoginStatus = () => {
      isLoggedIn.value = true;
    };

    return { sidebarWidth, isSidebarVisible, toggleSidebar, isLoggedIn, updateLoginStatus };
  }
};
</script>

<template>
  <div>
    <!-- Content visible only if the user is logged in -->
    <div v-if="isLoggedIn">
      <NavBar :toggleSidebar="toggleSidebar" />
      <Sidebar v-show="isSidebarVisible" class="sidebar" />
      <div :style="{ marginLeft: isSidebarVisible ? sidebarWidth : '0' }" class="content p-2 mt-12">
        <!-- Render route content here -->
        <router-view />
      </div>
    </div>

    <!-- Login link if not logged in -->
    <div v-else>
      <LoginPage @login="updateLoginStatus"/>
    </div>
  </div>
</template>
