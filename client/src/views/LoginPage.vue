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
        <div class="nav-button">
          <button 
            class="btn white-btn" 
            id="loginBtn" 
            :class="{ 'white-btn': isLoginActive }" 
            @click="showLogin"
          >Sign In</button>
          <button 
            class="btn" 
            id="registerBtn" 
            :class="{ 'white-btn': !isLoginActive }" 
            @click="showRegister"
          >Sign Up</button>
        </div>
        <div class="nav-menu-btn">
          <i class="bx bx-menu" @click="toggleMenu"></i>
        </div>
      </nav>
  
      <!-- Form box -->
      <div class="form-box">
        <!-- Login form -->
        <div class="login-container" id="login" :style="{ left: isLoginActive ? '4px' : '-510px', opacity: isLoginActive ? 1 : 0 }">
          <div class="top">
            <span>Don't have an account? <a href="#" @click="showRegister">Sign Up</a></span>
            <header>Login</header>
          </div>
          <div class="input-box">
            <input type="text" class="input-field" placeholder="Username or Email">
            <i class="bx bx-user"></i>
          </div>
          <div class="input-box">
            <input type="password" class="input-field" placeholder="Password">
            <i class="bx bx-lock-alt"></i>
          </div>
          <div class="input-box">
            <select class="input-field" id="role">
              <option value="" disabled selected>Select Role</option>
              <option value="admin">Admin</option>
              <option value="operator">Operator</option>
            </select>
            <i class='bx bx-user-circle'></i>
          </div>
          <div class="input-box">
            <input type="submit" class="submit" value="Sign In">
          </div>
          <div class="two-col">
            <div class="one">
              <input type="checkbox" id="login-check">
              <label for="login-check"> Remember Me</label>
            </div>
            <div class="two">
              <label><a href="#">Forgot password?</a></label>
            </div>
          </div>
        </div>
  
        <!-- Registration form -->
        <div class="register-container" id="register" :style="{ right: isLoginActive ? '-520px' : '5px', opacity: isLoginActive ? 0 : 1 }">
          <div class="top">
            <span>Have an account? <a href="#" @click="showLogin">Login</a></span>
            <header>Sign Up</header>
          </div>
          <div class="two-forms">
            <div class="input-box">
              <input type="text" class="input-field" placeholder="Firstname">
              <i class="bx bx-user"></i>
            </div>
            <div class="input-box">
              <input type="text" class="input-field" placeholder="Lastname">
              <i class="bx bx-user"></i>
            </div>
          </div>
          <div class="input-box">
            <input type="text" class="input-field" placeholder="Email">
            <i class="bx bx-envelope"></i>
          </div>
          <div class="input-box">
            <input type="password" class="input-field" placeholder="Password">
            <i class="bx bx-lock-alt"></i>
          </div>
          <div class="input-box">
            <input type="submit" class="submit" value="Register">
          </div>
          <div class="two-col">
            <div class="one">
              <input type="checkbox" id="register-check">
              <label for="register-check"> Remember Me</label>
            </div>
            <div class="two">
              <label><a href="#">Terms & conditions</a></label>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isLoginActive: true,
        isMenuResponsive: false,
      };
    },
    methods: {
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

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
}
body{
    background: url('../assets/TW2.JPG') no-repeat center center fixed;
    background-size: cover;
    overflow: hidden;
}
.wrapper{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: rgba(0, 0, 0, 0.6); /* Overlay untuk meningkatkan kontras teks */
}
.nav{
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
.nav-logo p{
    color: white;
    font-size: 25px;
    font-weight: 600;
}
.nav ul{
    display: flex;
    list-style: none;
}
.nav ul li{
    margin: 0 15px;
}
.nav ul li a{
    text-decoration: none;
    font-weight: 500;
    color: #fff;
    padding-bottom: 5px;
    font-size: 1rem;
    transition: 0.3s;
}
.nav ul li a:hover, .nav ul li a.active{
    border-bottom: 2px solid white;
}
.nav-button .btn{
    width: 130px;
    height: 40px;
    font-weight: 500;
    background: rgba(255, 255, 255, 0.4);
    border: none;
    border-radius: 30px;
    cursor: pointer;
    transition: 0.3s;
}
.nav-button .btn:hover{
    background: rgba(255, 255, 255, 0.3);
}
.nav-button .btn.white-btn{
    background: rgba(255, 255, 255, 0.7);
}
.nav-button .btn.white-btn:hover{
    background: rgba(255, 255, 255, 0.5);
}
.nav-menu-btn{
    display: none;
}
.form-box{
    background: rgba(255, 255, 255, 0.9);
    padding: 10px;
    border-radius: 10px;
    width: 450px; /* Tetap lebar yang Anda inginkan */
    min-height: 150px; /* Tinggi minimum */
    max-height: 300px; /* Tinggi maksimum */
    overflow-y: auto; /* Mengatur overflow untuk konten yang lebih panjang */
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    text-align: center;
}
.form-box h2{
    margin-bottom: 1.5rem;
    font-size: 1.8rem;
    color: #333;
}
.input-box{
    margin-bottom: 1rem;
    text-align: left;
}
.input-box input, .input-box select{
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 1rem;
}
.input-box select{
    background: white;
    cursor: pointer;
}
.submit{
    background: #007bff;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;
    transition: 0.3s;
}
.submit:hover{
    background: #0056b3;
}
.two-col{
    display: flex;
    justify-content: space-between;
    font-size: 0.9rem;
    color: #333;
    margin-top: 1rem;
}
.two-col a{
    text-decoration: none;
    color: #007bff;
    transition: 0.3s;
}
.two-col a:hover{
    text-decoration: underline;
}
@media only screen and (max-width: 786px){
    .nav-button{
        display: none;
    }
    .nav-menu{
        flex-direction: column;
        background: rgba(255, 255, 255, 0.9);
        position: absolute;
        top: 80px;
        left: 0;
        width: 100%;
        display: none;
        z-index: 99;
    }
    .nav-menu.responsive{
        display: flex;
    }
    .nav-menu-btn{
        display: block;
    }
    .nav-menu-btn i{
        font-size: 25px;
        color: #fff;
        padding: 10px;
        background: rgba(255, 255, 255, 0.2);
        border-radius: 50%;
        cursor: pointer;
        transition: 0.3s;
    }
    .nav-menu-btn i:hover{
        background: rgba(255, 255, 255, 0.15);
    }
}
@media only screen and (max-width: 540px) {
    .wrapper{
        padding: 0 1rem;
    }
    .form-box{
        width: 100%;
    }
}

  </style>
  