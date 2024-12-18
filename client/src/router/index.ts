import { createRouter, createWebHistory } from 'vue-router'
// @ts-ignore
import LoginPage from '@/views/LoginPage.vue'
// @ts-ignore
import AdminPage from '@/views/AdminPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: LoginPage,
    },
    {
      path: '/admin',
      name: 'admin',
      component: AdminPage,
    }

  ],
})

export default router
