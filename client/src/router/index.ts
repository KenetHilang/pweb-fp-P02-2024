import { createRouter, createWebHistory } from 'vue-router';
import LoginPage from '@/views/LoginPage.vue';
import AdminPage from '@/views/AdminPage.vue';
import EditItem from '@/components/AdminPage/EditItem.vue';
import AdminOperatorPage from '@/views/OperatorPage.vue';
import SummaryPage from '@/views/SummaryPage.vue';
import OperatorEdit from '@/components/Operator/OperatorEdit.vue';
import BorrowForm from '@/components/Operator/BorrowForm.vue';
import DisplayBorrowed from '@/components/Operator/DisplayBorrowed.vue';
import DisplayEquipment from '@/components/Operator/DisplayEquipment.vue';
import Rules from '@/views/Rules.vue'; // Pastikan path sesuai lokasi file
import HomePageOperator from '@/views/HomePageOperator.vue';
import OperatorPage from '@/views/OperatorPage.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: LoginPage,
      meta: { requiresAuth: false },
    },
    {
      path: '/admin',
      name: 'admin',
      component: AdminPage,
      meta: { requiresAuth: true, requiresAdmin: true },
    },
    {
      path: '/admin/edit-item/:id',
      name: 'edit-item',
      component: EditItem,
      props: true,
      meta: { requiresAuth: true, requiresAdmin: true },
    },
    {
      path: '/admin/all-operator',
      name: 'all-operator',
      component: OperatorPage,
      meta: { requiresAuth: true, requiresAdmin: true },
    },
    {
      path: '/Operator/OperatorEdit',
      name: 'edit-operator',
      component: OperatorEdit,
      props: true,
    },
    {
      path: '/HomePageOperator',
      name: 'HomePageOperator',
      component: HomePageOperator,
      meta: { requiresAuth: true, requiresOperator: true },
    },
    {
      path: '/operator/book-equipment',
      name: 'book-equipment',
      component: BorrowForm,
      meta: { requiresAuth: true, requiresOperator: true },
    },
    {
      path: '/admin/summary',
      name: 'summary',
      component: SummaryPage,
      meta: { requiresAuth: true, requiresAdmin: true },
    },
    {
      path: '/operator/borrowed-items',
      name: 'borrowed-items',
      component: DisplayBorrowed,
      meta: { requiresAuth: true, requiresOperator: true },
    },
    {
      path: '/operator/all-equipment',
      name: 'all-equipment',
      component: DisplayEquipment,
      meta: { requiresAuth: true, requiresOperator: true },
    },
    {
      path: '/rules',
      name: 'rules',
      component: Rules, // Gunakan nama komponen yang diimpor
      meta: { requiresAuth: false },
    },
    // Add catch-all route at the end
    {
      path: '/:pathMatch(.*)*',
      redirect: '/'
    }
  ],
});

// Modified navigation guard
router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token');
  const role = localStorage.getItem('role');

  // If route doesn't exist in router configuration, redirect to home
  if (!to.name) {
    next('/');
    return;
  }

  // If route requires authentication and no token exists
  if (to.meta.requiresAuth && !token) {
    next('/');
    return;
  }

  // If route requires admin role
  if (to.meta.requiresAdmin && role !== 'admin') {
    next('/');
    return;
  }

  // If route requires operator role
  if (to.meta.requiresOperator && role !== 'operator') {
    next('/');
    return;
  }

  // If logged in user tries to access login page
  if (to.path === '/' && token) {
    if (role === 'admin') {
      next('/admin');
    } else if (role === 'operator') {
      next('/HomePageOperator');
    }
    return;
  }

  next();
});

export default router;
