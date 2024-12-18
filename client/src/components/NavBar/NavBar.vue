<template>
      <nav
        class="flex items-center bg-[#181C14] py-2 shadow-md"
      >
        <a class="flex">
          <img
            src="../../assets/logo_dark.png"
            class="h-8 ml-4"
          />
        </a>
      </nav>
  </template>
  
  <script>
  export default {
    name: "NavBar",
  };
  </script>
  
  <style scoped>
  nav {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
  }
  </style>
  