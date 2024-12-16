<script>
export default {
    name: 'Sidebar',
};
</script>

<template>
    <div class="sidebar">

    </div>
</template>

<style>
    :root{
        --sidebar-bg-color: blue;
        --sidebar-item-hover: yellow;
        --sidebar-item-active: red;
    }
</style>

<style scoped>
.sidebar {
    color: white;
    background-color: #333;

    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    float: left;
    z-index: 1;
    padding : 0.5rem;

    display: flex;
    flex-direction: column;
}
</style>