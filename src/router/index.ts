import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/home/index.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/index.vue')
  },
  {
    path: '/vlpr',
    name: 'Vehicle License Plate Recognition',
    component: () => import('@/views/vlpr/index.vue')
  },
  {
    path: '/test',
    name: 'Test',
    component: () => import('@/views/test/index.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
