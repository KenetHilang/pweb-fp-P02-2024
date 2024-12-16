<template>
    <div class="login-page">
        <h1>Login</h1>
        <form @submit.prevent="login">
            <div class="form-group">
                <label for="email">Email:</label>
                <input type="email" v-model="email" required />
            </div>
            <div class="form-group">
                <label for="password">Password:</label>
                <input type="password" v-model="password" required />
            </div>
            <button type="submit">Login</button>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            email: '',
            password: ''
        };
    },
    methods: {
        login() {
            // Handle login logic here
            console.log('Email:', this.email);
            console.log('Password:', this.password);
        }
    }
};
</script>

<style scoped>
.login-page {
    max-width: 400px;
    margin: 0 auto;
    padding: 1em;
    border: 1px solid #ccc;
    border-radius: 4px;
}

.form-group {
    margin-bottom: 1em;
}

label {
    display: block;
    margin-bottom: 0.5em;
}

input {
    width: 100%;
    padding: 0.5em;
    box-sizing: border-box;
}

button {
    width: 100%;
    padding: 0.5em;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

button:hover {
    background-color: #0056b3;
}
</style>