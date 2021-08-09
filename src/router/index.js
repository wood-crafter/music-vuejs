import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Discovery from '../views/Discovery.vue'
import Auth from '../views/Auth.vue'
import Individual from '../views/Individual.vue'
import Chart from '../views/Chart.vue'
import Artist from '../views/Artist.vue'
import Live from '../views/Live.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/auth',
    name: 'Auth',
    component: Auth
  },
  {
    path: '/discovery',
    name: 'Discovery',
    component: Discovery
  },
  {
    path: '/individual',
    name: 'Individual',
    component: Individual
  },
  {
    path: '/chart',
    name: 'Chart',
    component: Chart
  }
  ,
  {
    path: '/artist/:id?',
    name: 'Artist',
    component: Artist
  }
  ,
  {
    path: '/live',
    name: 'Live',
    component: Live
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
