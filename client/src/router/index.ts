import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '@/views/LoginPage.vue'
import AdminPage from '@/views/AdminPage.vue'
import EditItem from '@/components/AdminPage/EditItem.vue'
import OperatorPage from '@/views/OperatorPage.vue'
import SummaryPage from '@/views/SummaryPage.vue'  // You'll need to create this component
import BorrowForm from '@/components/OperatorPage/BorrowForm.vue'
import OperatorEdit from '@/components/OperatorPage/OperatorEdit.vue'
import SummaryPage from '@/views/SummaryPage.vue'  // You'll need to create this component
import BorrowForm from '@/components/OperatorPage/BorrowForm.vue'
import DisplayBorrowed from '@/components/OperatorPage/DisplayBorrowed.vue'
import DisplayEquipment from '@/components/OperatorPage/DisplayEquipment.vue'


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
    {
      path: '/operator',
      name: 'operator',
      component: OperatorPage // ganti jadi home page nya operator
    },
    {
      path: '/operator/book-equipment',
      name: 'book-equipment',
      component: BorrowForm
    },
    {
      path: '/admin/summary',
      name: 'summary',
      component: SummaryPage
    },
    {
      path: '/operator/borrowed-items',
      name: 'borrowed-items',
      component: DisplayBorrowed
    },
    {
      path: '/operator/all-equipment',
      name: 'all-equipment',
      component: DisplayEquipment 
    }
  ],
})

export default router
