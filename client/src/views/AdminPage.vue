<template>
    <div class="admin-dashboard">
        <header>
            <h1>Admin Dashboard</h1>
        </header>
        <nav>
            <ul>
                <li><a href="#overview">Overview</a></li>
                <li><a href="#users">Users</a></li>
                <li><a href="#settings">Settings</a></li>
            </ul>
        </nav>
        <main>
            <section id="overview">
                <h2>Overview</h2>
                <p>Welcome to the admin dashboard. Here you can manage users, settings, and view statistics.</p>
            </section>
            <section id="users">
                <h2>Users</h2>
                <p>Manage your users here.</p>
            </section>
            <section id="settings">
                <h2>Settings</h2>
                <p>Adjust your settings here.</p>
            </section>
        </main>
    </div>
</template>

<script>
export default {
    name: 'AdminPage',
};
</script>

<style scoped>
.admin-dashboard {
    font-family: Arial, sans-serif;
}

header {
    background-color: #4CAF50;
    color: white;
    padding: 1em;
    text-align: center;
}

nav {
    margin: 1em 0;
}

nav ul {
    list-style-type: none;
    padding: 0;
}

nav ul li {
    display: inline;
    margin-right: 1em;
}

main {
    padding: 1em;
}

section {
    margin-bottom: 2em;
}
</style>