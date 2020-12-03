import Vue from 'vue'
import VueRouter from 'vue-router'
//import AcademyForm from '../views/AcademyForm.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/academy/form',
    name: 'AcademyForm',
    component: () => import('../views/Academy/Form.vue')
  },
  {
    path: '/academy/customer',
    name: 'AcademyCustomer',
    component: () => import('../views/Academy/Customer.vue')
  },
  {
    path: '/academy/period',
    name: 'AcademyPeriod',
    component: () => import('../views/Academy/Period.vue')
  },
  {
    path: '/academy/list',
    name: 'AcademyList',
    component: () => import('../views/Academy/List.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
