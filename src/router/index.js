import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'contact',
    component: () => import('@/views/tlias/EmpView.vue')
  },
  {
    path: '/favorite',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('@/views/tlias/FavoriteView.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
