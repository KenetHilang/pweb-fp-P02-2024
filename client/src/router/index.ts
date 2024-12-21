import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '@/views/LoginPage.vue'
import AdminPage from '@/views/AdminPage.vue'
import EditItem from '@/components/AdminPage/EditItem.vue'
import OperatorPage from '@/views/OperatorPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: LoginPage,
      meta: { requiresLayout: false }, // Tidak butuh layout
    },
    {
      path: '/admin',
      name: 'admin',
      component: AdminPage,
      meta: { requiresLayout: true }, // Butuh layout
    },
    {
      path: '/admin/edit-item/:id',
      name: 'edit-item',
      component: EditItem,
      props: true,
      meta: { requiresLayout: true }, // Butuh layout
    },
    {
      path: '/admin/all-operator',
      name: 'all-operator',
      component: OperatorPage,
      meta: { requiresLayout: true }, // Butuh layout
    }
  ],
})

export default router
