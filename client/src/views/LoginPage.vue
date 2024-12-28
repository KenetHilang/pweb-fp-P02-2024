<template> 
  <div class="min-h-screen flex flex-col">
    <!-- Login Section -->
    <div class="min-h-screen flex flex-col justify-center items-center">
      <!-- Form box -->
      <div class="form-box">
        <header>Login</header>
        <div class="input-box">
          <input 
            v-model="username" 
            type="text" 
            class="input-field" 
            placeholder="Username" 
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

    <!-- Additional Content Section -->
    <div class="hero-section bg-gradient-to-b from-blue-200 to-teal-100 flex items-center justify-center min-h-[30vh]">
      <div class="container mx-auto px-6 lg:flex lg:items-center">
        <!-- Left Content -->
        <div class="text-content max-w-lg text-center lg:text-left">
          <p class="text-sm text-gray-500 font-semibold mb-2">HMIT ITS</p>
          <h1 class="text-4xl font-bold mt-2 mb-8 text-gray-800">Lab KCKS</h1>
          <p class="text-gray-600 mb-6">
            "Lab KCKS ITS mengembangkan solusi inovatif untuk smart city dan keamanan siber, mendukung transformasi digital yang aman dan berkelanjutan."
          </p>
          <button 
  class="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition mb-8"
  @click="scrollToPopularSubjects"
>
  Read Now &#8594;
</button>
        </div>

        <!-- Right Image -->
        <div class="image-content mt-10 lg:mt-0 lg:ml-10 flex justify-center">
          <img 
            src="../assets/AIKCKS.png" 
            alt="Smart Band 4" 
            class="max-w-full h-auto rounded-md shadow-lg"
          />
        </div>
      </div>
    </div>

    <!-- Popular Subjects Section -->
    <div id="popular-subjects" class="min-h-screen flex flex-col justify-center items-center gradient-bg">
      <!-- Title -->
      <div class="text-center mb-8">
        <h2 class="text-3xl font-bold text-teal-600">Our Popular Subjects</h2>
      </div>

      <!-- Cards -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        <!-- Card 1 -->
        <div class="subject-card hover:shadow-lg transition flex flex-col justify-center items-center">
          <div class="circle bg-teal-100 h-20 w-20 flex items-center justify-center">>
            <img
              src="../assets/iot.png"
              alt="Interner Of Things (IoT)"
              class="h-12 w-12"
            />
          </div>
          <h3 class="text-lg font-bold text-gray-800 mt-4 text-center">Interner Of Things (IoT)</h3>
          <p class="text-gray-500 text-sm text-center mt-1">Fun & Challenging</p>
        </div>

        <!-- Card 2 -->
        <div class="subject-card hover:shadow-lg transition flex flex-col justify-center items-center">
          <div class="circle bg-teal-100 h-20 w-20 flex items-center justify-center">
            <img
              src="../assets/cyber-security.png"
              alt="Cyber Security"
              class="h-12 w-12"
            />
          </div>
          <h3 class="text-lg font-bold text-gray-800 mt-4 text-center">Cyber Security</h3>
          <p class="text-gray-500 text-sm text-center mt-1">Fun & Challenging</p>
        </div>

        <!-- Card 3 -->
        <div class="subject-card hover:shadow-lg transition flex flex-col justify-center items-center">
          <div class="circle bg-teal-100 h-20 w-20 flex items-center justify-center">
            <img
              src="../assets/cloud-computing_7213255.png"
              alt="Cloud Computing"
              class="h-12 w-12"
            />
          </div>
          <h3 class="text-lg font-bold text-gray-800 mt-4 text-center">Cloud Computing</h3>
          <p class="text-gray-500 text-sm text-center mt-1">Fun & Challenging</p>
        </div>

        <!-- Card 4 -->
        <div class="subject-card hover:shadow-lg transition flex flex-col justify-center items-center">
          <div class="circle bg-teal-100 h-20 w-20 flex items-center justify-center">
            <img
              src="../assets/machine-learning.png"
              alt="Machine Learning"
              class="h-12 w-12"
            />
          </div>
          <h3 class="text-lg font-bold text-gray-800 mt-4 text-center">Machine Learning</h3>
          <p class="text-gray-500 text-sm text-center mt-1">Fun & Challenging</p>
        </div>

        <!-- Card 5 -->
        <div class="subject-card hover:shadow-lg transition flex flex-col justify-center items-center">
          <div class="circle bg-teal-100 h-20 w-20 flex items-center justify-center">
            <img
              src="../assets/pngwing.com.png"
              alt="Embedded System"
              class="h-12 w-12"
            />
          </div>
          <h3 class="text-lg font-bold text-gray-800 mt-4 text-center">Embedded System</h3>
          <p class="text-gray-500 text-sm text-center mt-1">Fun & Challenging</p>
        </div>

        <!-- Card 6 -->
        <div class="subject-card hover:shadow-lg transition flex flex-col justify-center items-center">
          <div class="circle bg-teal-100 h-20 w-20 flex items-center justify-center">
            <img
              src="../assets/smart-city_3391472.png"
              alt="Engineering"
              class="h-12 w-12"
            />
          </div>
          <h3 class="text-lg font-bold text-gray-800 mt-4 text-center">Engineering</h3>
          <p class="text-gray-500 text-sm text-center mt-1">Fun & Challenging</p>
        </div>
      </div>
    </div>

    <!-- Expert Teachers Section -->
    <div class="teacher-section bg-gray-100 py-16 gradient-bg">
      <div class="text-center mb-8">
        <h2 class="text-3xl font-bold text-teal-600">Our Expert Teachers</h2>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-6 justify-center text-cente">
        <!-- Teacher Card 1 -->
        <div class="teacher-card bg-white rounded-lg shadow-md p-8 text-center">
          <img
            src="../assets/KEN.jpg"
            alt="Teacher 1"
            class="w-full h-48 rounded-md object-cover mb-4"
          />
          <h3 class="text-xl font-semibold text-gray-800">Kenneth</h3>
          <p class="text-gray-500 text-md">Instructor</p>
        </div>

        <!-- Teacher Card 2 -->
        <div class="teacher-card bg-white rounded-lg shadow-md p-8 text-center">
          <img
            src="../assets/AISYAH.jpg"
            alt="Teacher 2"
            class="w-full h-48 rounded-md object-cover mb-4"
          />
          <h3 class="text-xl font-semibold text-gray-800">AISYAH</h3>
          <p class="text-gray-500 text-md">Instructor</p>
        </div>

        <!-- Teacher Card 3 -->
        <div class="teacher-card bg-white rounded-lg shadow-md p-8 text-center">
          <img
            src="../assets/AZZA.jpg"
            alt="Teacher 3"
            class="w-full h-48 rounded-md object-cover mb-4"
          />
          <h3 class="text-xl font-semibold text-gray-800">Azza</h3>
          <p class="text-gray-500 text-md">Instructor</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';

export default {
  name: 'LoginPage',
  data() {
    return {
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
        console.log('Login payload:', {
          username: this.username,
          password: this.password,
          role: this.role,
        });

        const response = await fetch('http://localhost:4000/auth/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username: this.username,
            password: this.password,
            role: this.role, // Role sent to backend
          }),
        });

        const data = await response.json();

        console.log('Server response:', data);

        if (response.ok) {
          if (data.user.role !== this.role) {
            alert(
              `Username "${this.username}" and role "${this.role}" do not match.`
            );
            return;
          }

          // Store token and user info
          localStorage.setItem('token', data.token);
          localStorage.setItem('role', data.user.role);
          localStorage.setItem('username', data.user.username);

          alert('Login successful!');

          // Redirect to role-specific route
          this.$router.push({
            path: data.user.role === 'admin' ? '/admin' : '/HomePageOperator',
          });
        } else {
          alert(data.message || 'Login failed.');
        }
      } catch (error) {
        console.error('Login error:', error);
        alert('Network error. Please check your connection.');
      }
    },
    scrollToPopularSubjects() {
      const element = document.getElementById('popular-subjects');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    },
  },
  mounted() {
    new Swiper('.swiper-container', {
      slidesPerView: 3, // Menampilkan 3 card per halaman
      spaceBetween: 30, // Jarak antar card
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  },
};
</script>



<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}

.body {
  background: url('../assets/TW2.JPG') no-repeat center center fixed;
  background-size: cover;
  overflow-y: auto;
}

.min-h-screen.bg-gray-50 {
  margin-top: 5rem; /* Menambahkan jarak ke atas */
}

.gradient-bg {
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1) 50%, rgba(255, 255, 255, 0));
}

.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.6);
}

.form-box {
  background: rgba(255, 255, 255, 0.95);
  padding: 2rem;
  border-radius: 10px;
  width: 400px;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
  text-align: center;
  margin: 50px auto;
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

.hero-section {
  background: linear-gradient(to bottom, transparent, #d1f5ff, transparent);
  font-family: 'Poppins', sans-serif;
}

.text-content h1 {
  line-height: 1.2;
}

.image-content img {
  object-fit: cover;
  box-shadow: none;
}

.subject-card {
  width: 280px; /* Semua box memiliki lebar tetap */
  height: 200px; /* Tinggi tetap */
  background: white;
  padding: 1.5rem;
  border-radius: 0.5rem;
  border: 1px solid #e5e5e5;
  text-align: center;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}


.subject-card:hover {
  transform: translateY(-4px);
}

.circle {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Membuat jarak antara judul dan box */
#popular-subjects h2,
#expert-teachers h2 {
  margin-bottom: 3rem;
}

.grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    justify-items: center; /* Elemen tengah */
    gap: 20px;
}

.swiper-container {
  width: 100%;
  height: auto;
}

.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

/* Tambahkan lebih spesifik */
.teacher-section bg-gray-100 py-16 gradient-bg {
  padding-top: 4rem; /* Add top padding */
  padding-bottom: 4rem; /* Add bottom padding */
  margin-bottom: 40px; /* Add margin to the bottom to separate from footer */
}

.teacher-section h2 {
  margin-bottom: 3rem; /* Ensure a comfortable distance from the top of the section */
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); /* Adjust grid to have more flexible columns */
  gap: 20px;
  justify-items: center; /* Center content in the grid */
}

.teacher-card {
  width: 300px; /* Lebar lebih besar */
  height: 350px; /* Tinggi otomatis sesuai konten */
  margin: 0 auto; /* Tengahkan */
  background: white;
  padding: 1.5rem;
  border-radius: 0.5rem;
  border: 1px solid #e5e5e5;
  text-align: center;
  transition: all 0.3s ease;
  
}

.teacher-card:hover {
  transform: translateY(-5px); /* Animasi hover */
}

.teacher-card img {
  max-height: 250px; /* Increased height of the image */
  width: 100%;
  object-fit: cover; /* Ensure the image covers the box area */
  border-radius: 10px;
}

.teacher-card h3 {
  margin-top: 1rem;
  font-size: 1.2rem;
  font-weight: bold;
}

.teacher-card p {
  color: #555;
}
</style>
