<template>
  <div class="min-h-screen flex flex-col">
    <NavBar />
    <Sidebar 
      v-if="isSidebarVisible && currentRoute !== '/'"
      class="sidebar" 
    />
    <div :style="{ marginLeft: isSidebarVisible ? sidebarWidth : '0' }" class="content p-2 mt-12">
      <router-view />
    </div>
    <FancyFooter />
  </div>
</template>

<script>
import { ref, watch } from 'vue';
import Sidebar from '@/components/SideBar/Sidebar.vue';
import NavBar from '@/components/NavBar/NavBar.vue';
import FancyFooter from '@/components/Footer/Footer.vue';
import { sidebarWidth } from '@/components/SideBar/state';
import { useRouter } from 'vue-router';

export default {
  components: { Sidebar, NavBar, FancyFooter },
  setup() {
    const isSidebarVisible = ref(true);
    const currentRoute = ref('');
    const router = useRouter();

    watch(
      () => router.currentRoute.value.path,
      (newRoute) => {
        currentRoute.value = newRoute;
        isSidebarVisible.value = newRoute !== '/';
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
