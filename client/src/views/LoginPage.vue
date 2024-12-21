<template>
    <div class="wrapper">
      <nav class="nav">
        <div class="nav-logo">
          <p>PEMINJAMAN BARANG IT ITS.</p>
        </div>
        <div :class="['nav-menu', { responsive: isMenuResponsive }]" id="navMenu">
          <ul>
            <li><a href="#" class="link active">Home</a></li>
            <li><a href="#" class="link">Blog</a></li>
            <li><a href="#" class="link">Services</a></li>
            <li><a href="#" class="link">About</a></li>
          </ul>
        </div>
        <div class="nav-menu-btn">
          <i class="bx bx-menu" @click="toggleMenu"></i>
        </div>
      </nav>
  
      <!-- Form box -->
      <div class="form-box">
        <header>Login</header>
        <div class="input-box">
          <input 
            v-model="username" 
            type="text" 
            class="input-field" 
            placeholder="Username or Email" 
          />
          <i class="bx bx-user"></i>
        </div>
        <div class="input-box">
          <input 
            v-model="password" 
            type="password" 
            class="input-field" 
            placeholder="Password" 
          />
          <i class="bx bx-lock-alt"></i>
        </div>
        <div class="input-box">
          <select v-model="role" class="input-field">
            <option value="" disabled selected>Select Role</option>
            <option value="admin">Admin</option>
            <option value="operator">Operator</option>
          </select>
          <i class="bx bx-user-circle"></i>
        </div>
        <button @click="login" class="submit">Sign In</button>
      </div>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  
  export default {
    name: 'LoginPage',
    data() {
      return {
        isLoginActive: true,
        isMenuResponsive: false,
        username: '',
        password: '',
        role: '',
      };
    },
    methods: {
      async login() {
        if (!this.username || !this.password) {
          alert('Username and Password cannot be empty.');
          return;
        }
        if (!this.role) {
          alert('Please select a role.');
          return;
        }
  
        try {
          const response = await fetch('http://localhost:4000/auth/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              username: this.username,
              password: this.password,
            }),
          });
  
          const data = await response.json();
  
          if (response.ok) {
            if (data.user.role !== this.role) {
              alert('Username and role do not match.');
              return;
            }
  
            // Simpan token dan arahkan ke halaman berdasarkan role
            localStorage.setItem('token', data.token);
            localStorage.setItem('role', data.user.role);
            alert('Login successful!');
            this.$emit('login'); // Emit the 'login' event to the parent
            if (data.user.role === 'admin') {
              this.$router.push({ name: 'admin' });
            } else if (data.user.role === 'operator') {
              this.$router.push({ name: 'operator' });
            }
          } else {
            if (data.message === 'User not found') {
              alert('Username not registered. Please sign up.');
            } else if (data.message === 'Invalid password') {
              alert('Incorrect password. Please try again.');
            } else {
              alert(data.message || 'Login failed.');
            }
          }
        } catch (error) {
          console.error('Login error:', error);
          alert('Network error. Please check your connection.');
        }
      },
      showLogin() {
        this.isLoginActive = true;
      },
      showRegister() {
        this.isLoginActive = false;
      },
      toggleMenu() {
        this.isMenuResponsive = !this.isMenuResponsive;
      },
    },
  };
  </script>
  
  
  <style scoped>
  /* POPPINS FONT */
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }
  
  body {
    background: url('../assets/TW2.JPG') no-repeat center center fixed;
    background-size: cover;
    overflow: hidden;
  }
  
  .wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: rgba(0, 0, 0, 0.6);
  }
  
  .nav {
    position: fixed;
    top: 0;
    width: 100%;
    height: 80px;
    line-height: 80px;
    background: rgba(39, 39, 39, 0.8);
    z-index: 100;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  
  .nav-logo p {
    color: white;
    font-size: 25px;
    font-weight: 600;
  }
  
  .nav ul {
    display: flex;
    list-style: none;
  }
  
  .nav ul li {
    margin: 0 15px;
  }
  
  .nav ul li a {
    text-decoration: none;
    font-weight: 500;
    color: #fff;
    padding-bottom: 5px;
    font-size: 1rem;
    transition: 0.3s;
  }
  
  .nav ul li a:hover, .nav ul li a.active {
    border-bottom: 2px solid white;
  }
  
  .nav-menu-btn {
    display: none;
  }
  
  .form-box {
    background: rgba(255, 255, 255, 0.95);
    padding: 2rem;
    border-radius: 10px;
    width: 400px;
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
    text-align: center;
    margin-top: 50px;
  }
  
  .form-box header {
    margin-bottom: 1rem;
    font-size: 1.8rem;
    color: #333;
    font-weight: 600;
  }
  
  .input-box {
    position: relative;
    margin-bottom: 1rem;
    text-align: left;
  }
  
  .input-box input, .input-box select {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 1rem;
    background: rgba(255, 255, 255, 0.8);
    color: #333;
    transition: all 0.3s ease;
  }
  
  .input-box input:focus, .input-box select:focus {
    border-color: #007bff;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
    outline: none;
  }
  
  .input-box i {
    position: absolute;
    top: 50%;
    left: 10px;
    transform: translateY(-50%);
    color: #aaa;
    pointer-events: none;
  }
  
  .submit {
    background: linear-gradient(45deg, #007bff, #0056b3);
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;
    transition: all 0.3s ease;
    width: 100%;
  }
  
  .submit:hover {
    background: linear-gradient(45deg, #0056b3, #003d80);
    transform: translateY(-2px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  .two-col {
    display: flex;
    justify-content: space-between;
    font-size: 0.9rem;
    color: #333;
    margin-top: 1rem;
  }
  
  .two-col a {
    text-decoration: none;
    color: #007bff;
    transition: 0.3s;
  }
  
  .two-col a:hover {
    text-decoration: underline;
  }
  </style>
  