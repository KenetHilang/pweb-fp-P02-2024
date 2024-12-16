<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
      <nav class="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
        <RouterLink to="/">Login</RouterLink>
        <RouterLink to="/admin">Admin</RouterLink>
      </nav>
  </header>

  <RouterView />
</template>

<style scoped>

</style>
