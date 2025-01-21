import { createRouter, createWebHistory } from 'vue-router'

const rootRoutes = [
  {
      path: 'home',
      name: 'Home',
      meta:{
          title: '首页',
          cache:true
      },
      component: () => import('../views/Home/Home.vue')
  },
]

const routes = [
  {
    path: '/',
    name: 'App',
    component: () => import('../views/KeepAlive.vue'),
    redirect: '/home',
    children: rootRoutes
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router