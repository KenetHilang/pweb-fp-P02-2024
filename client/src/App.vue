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
  <NavBar />
  <Sidebar />
  <div :style="{ 'margin-left': sidebarWidth }" id="view"> 
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#view {
  margin-top: 3.5rem;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

</style>