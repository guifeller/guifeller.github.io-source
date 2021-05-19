import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Portfolio from '../views/Portfolio.vue'
import Rtd from '../views/Rtd.vue'
import Salt from '../views/Salt.vue'
import Surv from '../views/Surv.vue'
import Wayback from '../views/Wayback.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Portfolio',
    component: Portfolio
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: Portfolio
  },
  {
    path: '/salt',
    name: 'Salt',
    component: Salt
  },
  {
    path: '/rtd',
    name: 'Rtd',
    component: Rtd
  },
  {
    path: '/surv',
    name: 'Surv',
    component: Surv
  },
  {
    path: '/wayback',
    name: 'Wayback',
    component: Wayback
  },
]

const router = new VueRouter({
  routes
})

export default router
