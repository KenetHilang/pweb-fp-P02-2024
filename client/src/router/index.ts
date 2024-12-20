import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '@/views/LoginPage.vue'
import AdminPage from '@/views/AdminPage.vue'
import EditItem from '@/components/AdminPage/EditItem.vue'
import OperatorPage from '@/views/OperatorPage.vue'
import OperatorEdit from '@/components/OperatorPage/OperatorEdit.vue'

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
    },
    {
      path: '/admin/edit-item/:id',
      name: 'edit-item',
      component: EditItem,
      props: true,
    },
    {
      path: '/admin/all-operator',
      name: 'all-operator',
      component: OperatorPage,
    },
    {
      path: '/admin/edit-operator/:id',
      name: 'edit-operator',
      component: OperatorEdit,
      props: true,
    },
    // {
    //   path:'/admin/summary',
    //   name:'summary',
    //   component: Summary,
    // }
  ],
})

export default router
