<template>
  <nav class="bg-gradient-to-r from-blue-800 to-indigo-900 text-white shadow-md py-2">
    <div class="container mx-auto flex justify-between items-center">
      <!-- Logo and Title -->
      <div class="flex items-center space-x-4">
        <img 
          src="C:\Users\Aisyah Rahmasari\pweb-fp-P02-2024\client\src\assets\LABKCKS.png" 
          alt="Lab Logo" 
          class="h-16 w-16 rounded-full"
        />
        <h1 class="text-lg font-bold">LAB KCKS TEKNOLOGI INFORMASI - ITS</h1>
      </div>

      <!-- Navigation and User Info -->
      <div class="flex items-center space-x-6">
        <!-- Aturan Peminjaman -->
        <router-link
          :to="isOnRulesPage ? '/' : '/rules'"
          class="px-3 py-1 bg-blue-600 rounded-lg hover:bg-blue-700 transition"
        >
          {{ isOnRulesPage ? 'Back to Home' : 'Aturan Peminjaman' }}
        </router-link>

        <!-- User Profile -->
        <div v-if="username && role" class="flex items-center space-x-3">
          <img 
            src="C:\Users\Aisyah Rahmasari\pweb-fp-P02-2024\client\src\assets\PROFILE.png" 
            alt="User Profile Logo" 
            class="h-12 w-12 rounded-full border border-gray-200 bg-white p-1"
          />
          <div class="text-sm">
            <span class="block font-medium capitalize">{{ username }}</span>
            <span class="block text-gray-300 text-xs">as {{ role }}</span>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent, ref, computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';

export default defineComponent({
  name: "Navbar",
  setup() {
    const username = ref('');
    const role = ref('');

    // Tentukan apakah rute saat ini adalah rules
    const route = useRoute();
    const isOnRulesPage = computed(() => route.path === '/rules');

    // Ambil data pengguna dari localStorage
    onMounted(() => {
      username.value = localStorage.getItem('username') || 'Guest';
      role.value = localStorage.getItem('role') || 'Operator';
    });

    return {
      username,
      role,
      isOnRulesPage,
    };
  },
});
</script>

<style scoped>
nav {
  font-family: 'Poppins', sans-serif;
}

nav a {
  transition: all 0.3s ease;
}

nav a:hover {
  text-decoration: underline;
}

img {
  object-fit: cover;
}
</style>
