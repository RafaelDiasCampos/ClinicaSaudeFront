import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import Gallery from '../views/Gallery.vue'
import Login from '../views/Login.vue'
import Profile from '../views/Profile.vue'
import RegisterAddress from '../views/RegisterAddress.vue'
import Scheduling from '../views/Scheduling.vue'
import RestrictedArea from '../views/RestrictedArea.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/gallery',
    name: 'Gallery',
    component: Gallery
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/register-address',
    name: 'Register Address',
    component: RegisterAddress
  },
  {
    path: '/scheduling',
    name: 'Scheduling',
    component: Scheduling
  },
  {
    path: '/restricted-area',
    name: 'Restricted Area',
    component: RestrictedArea
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
