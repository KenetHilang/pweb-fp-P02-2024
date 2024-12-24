import { createRouter, createWebHistory } from 'vue-router';
import LoginPage from '@/views/LoginPage.vue';
import AdminPage from '@/views/AdminPage.vue';
import EditItem from '@/components/AdminPage/EditItem.vue';
import OperatorPage from '@/views/HomePageOperator.vue';
import SummaryPage from '@/views/SummaryPage.vue';
import OperatorEdit from '@/components/Operator/OperatorEdit.vue';
import BorrowForm from '@/components/Operator/BorrowForm.vue';
import DisplayBorrowed from '@/components/Operator/DisplayBorrowed.vue';
import DisplayEquipment from '@/components/Operator/DisplayEquipment.vue';
import Rules from '@/views/Rules.vue'; // Pastikan path sesuai lokasi file
import HomePageOperator from '@/views/HomePageOperator.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: LoginPage,
      meta: { requiresLayout: false },
    },
    {
      path: '/admin',
      name: 'admin',
      component: AdminPage,
      meta: { requiresLayout: true },
    },
    {
      path: '/admin/edit-item/:id',
      name: 'edit-item',
      component: EditItem,
      props: true,
      meta: { requiresLayout: true },
    },
    {
      path: '/admin/all-operator',
      name: 'all-operator',
      component: OperatorPage,
    },
    {
      path: '/Operator/OperatorEdit',
      name: 'edit-operator',
      component: OperatorEdit,
      props: true,
    },
    {
      path: '/operator',
      name: 'operator',
      component: HomePageOperator,
    },
    {
      path: '/operator/book-equipment',
      name: 'book-equipment',
      component: BorrowForm,
    },
    {
      path: '/admin/summary',
      name: 'summary',
      component: SummaryPage,
    },
    {
      path: '/operator/borrowed-items',
      name: 'borrowed-items',
      component: DisplayBorrowed,
    },
    {
      path: '/operator/all-equipment',
      name: 'all-equipment',
      component: DisplayEquipment,
    },
    {
      path: '/rules', // Tambahkan rute baru untuk RulesPage
      name: 'rules',
      component: Rules, // Gunakan nama komponen yang diimpor
      meta: { requiresLayout: false },
    },
  ],
});

export default router;
