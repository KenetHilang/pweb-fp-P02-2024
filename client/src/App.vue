<script>
import Sidebar from '@/components/SideBar/Sidebar.vue'
import { sidebarWidth } from '@/components/SideBar/state'
import NavBar from '@/components/NavBar/NavBar.vue';

export default {
  components: { Sidebar, NavBar },
  setup() {
    return { sidebarWidth }
  }
}
</script>


<template>
  <div>
    
    <div>
      <NavBar />
      <Sidebar />
      <div :style="{ 'margin-left': sidebarWidth }" class="p-2 mt-12">
        <router-view />
      </div>
    </div>
  </div>
</template>


<style>
.view {
  margin-top: 3.5rem; 
}
</style>