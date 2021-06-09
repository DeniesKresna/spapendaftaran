import Vue from 'vue'
import VueRouter from 'vue-router'
//import AcademyForm from '../views/AcademyForm.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: () => import('../views/Index.vue')
  },
  {
    path: '/test',
    name : 'Test',
    component : ()=> import('../views/Test.vue')
  },
  {
    path: '/academy/form',
    name: 'AcademyForm',
    component: () => import('../views/Academy/Form.vue')
  },
  {
    path: '/popup/masuklogin',
    name: 'MasukLogin',
    component: () => import('../views/Popup/MasukLogin.vue')
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
  },
  {
    path: '/jobhun/academy',
    name: 'JobhunAcademy',
    component: () => import('../views/Jobhun/Academy.vue')
  },
  {
    path: '/jobhun/askcareer',
    name: 'JobhunAskCareer',
    component: () => import('../views/Jobhun/AskCareer.vue')
  },
  {
    path: '/academy/mentoracademy',
    name: 'JobhunMentorAcademy',
    component: () => import('../views/Academy/MentorJA.vue')
  },
  {
    path: '/jobhun/mentoraskcareer',
    name: 'JobhunMentorAskCareer',
    component: () => import('../views/AskCareer/Mentor.vue')
  },
  {
    path: '/jobhun/careerhub',
    name: 'JobhunCareerHub',
    component: () => import('../views/Jobhun/CareerHub.vue')
  },
  {
    path: '/user/mentor',
    name: 'UserMentor',
    component: () => import('../views/User/Mentor.vue')
  },
  {
    path: '/user/expert',
    name: 'UserExpert',
    component: () => import('../views/User/Expert.vue')
  },
  {
    path: '/user/register',
    name: 'UserRegister',
    component: () => import('../views/User/Register.vue')
  },
  {
    path: '*',
    name: 'PageNotFound',
    component: () => import('../views/NoPage.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
